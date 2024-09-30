import type { Params } from "@/types";

export function buildCustomQuery(params: Params): string {
    const query = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== '')
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}~${value.join('--')}`;
        }
        return `${key}~${value}`;
      })
      .join('+');
  
    return query ? `?${query}` : '';
}
