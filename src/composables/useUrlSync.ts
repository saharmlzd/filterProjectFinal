import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { InputElement } from '@/types'
import { InputTypeEnum } from '@/types'
import { buildCustomQuery, parseCustomQuery } from '@/utils'

//TODO: I should do it more better.
// This composable function synchronizes form data with URL parameters
export function useUrlSync(elements: InputElement[]) {
  const route = useRoute()

  // Reactive object to store form data
  const formData = ref<{ [key: string]: any }>({})
  // Initialize form data from URL parameters when component is mounted
  onMounted(() => {
    const query = route.fullPath.includes('?') ? route.fullPath.split('?')[1] : ''
    if (query) {
      const parsedParams = parseCustomQuery(query)

      //Papulate formData with paarsed params
      Object.keys(parsedParams).forEach((key) => {
        const element = elements.find((el) => el.name === key)
        if (element) {
          if (element.type === InputTypeEnum.CheckboxGroup) {
            formData.value[key] = Array.isArray(parsedParams[key])
              ? parsedParams[key]
              : [parsedParams[key]]
          } else {
            formData.value[key] = parsedParams[key]
          }
        }
      })
    }
  })

  // Watch for changes in formData and update URL accordingly
  watch(
    formData,
    (newFormData) => {
      const updatedParams: { [key: string]: string | string[] | undefined } = { ...formData.value }
      console.log(newFormData)

      // Process each form field
      Object.keys(newFormData).forEach((key) => {
        const value = newFormData[key]
        const element = elements.find((el) => el.name === key)

        if (value && element) {
          if (element.type === InputTypeEnum.CheckboxGroup) {
            updatedParams[key] = value
          } else {
            updatedParams[key] = String(value)
          }
        }
      })

      // Build and update URL with new parameters
      const customQuery: string = buildCustomQuery(updatedParams)
      console.log(customQuery, '++++')
      window.history.replaceState(null, '', customQuery)
    },
    { deep: true }
  )

  // Function to clear a specific field and its children (if any)
  function clearField(fieldName: string) {
    const element = elements.find((el) => el.name === fieldName)
    if (!element) return

    formData.value[fieldName] = undefined

    if (element.children) {
      element.children.forEach((childName) => {
        formData.value[childName] = undefined
      })
    }
  }

  return {
    formData,
    clearField
  }
}
