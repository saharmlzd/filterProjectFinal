import type { InputElement } from "@/types";

export const MockData: InputElement[] = [
  {
    type: "text",
    name: "product-name",
    label: "نام کالا",
    children: null,
    parent: null,
    options: null,
  },
  {
    type: "checkbox-group",
    name: "seller-type",
    label: "نوع فروشنده",
    children: null,
    parent: null,
    options: [
      {
        value: 100,
        title: "فروشنده رسمی",
      },
      {
        value: 101,
        title: "فروشنده برگزیده",
      },
      {
        value: 102,
        title: "دیجی کالا",
      },
      {
        value: 103,
        title: "کسب و کارهای بومی",
      },
    ],
  },
  {
    type: "checkbox",
    name: "exist",
    label: "فقط کالاهای موجود",
    children: ["provider"],
    parent: null,
    options: [
      {
        value: "exist",
        title: "فقط کالاهای موجود",
      },
    ],
  },
  {
    type: "dropdown",
    name: "provider",
    label: "انبار",
    children: null,
    parent: "exist",
    options: [
      {
        value: 2,
        title: "دیجی کالا",
      },
      {
        value: 3,
        title: "سایر",
      },
    ],
  },
  {
    type: "dropdown",
    name: "category",
    label: "دسته بندی",
    children: ["mobile", "book-and-media", "home-and-kitchen", "personal-appliance", "price-range"],
    parent: null,
    options: [
      {
        value: "mobile",
        title: "موبایل",
      },
      {
        value: "book-and-media",
        title: "کتاب و لوازم تحریر",
      },
      {
        value: "home-and-kitchen",
        title: "خانه و آشپزخانه",
      },
      {
        value: "personal-appliance",
        title: "زیبایی و سلامت",
      },
    ],
  },
  {
    type: "checkbox-group",
    name: "mobile",
    label: "برند",
    children: null,    
    parent: "category",
    options: [
      {
        value: 1001,
        title: "اپل",
      },
      {
        value: 1002,
        title: "سامسونگ",
      },
      {
        value: 1003,
        title: "شیائومی",
      },
      {
        value: 1004,
        title: "هوآوی",
      },
    ],
  },
  {
    type: "checkbox-group",
    name: "book-and-media",
    label: "برند",
    children: null,
    parent: "category",
    options: [
      {
        value: 1101,
        title: "پاپکو",
      },
      {
        value: 1102,
        title: "پنتر",
      },
      {
        value: 1103,
        title: "آریا",
      },
      {
        value: 1104,
        title: "کیان",
      },
    ],
  },
  {
    type: "checkbox-group",
    name: "home-and-kitchen",
    label: "برند",
    children: null,
    parent: "category",
    options: [
      {
        value: 1201,
        title: "سامسونگ",
      },
      {
        value: 1202,
        title: " ایکس ویژن",
      },
      {
        value: 1203,
        title: "جی پلاس",
      },
      {
        value: 1204,
        title: "دوو",
      },
    ],
  },
  {
    type: "checkbox-group",
    name: "personal-appliance",
    label: "برند",
    children: null,
    parent: "category",
    options: [
      {
        value: 1301,
        title: "پریم",
      },
      {
        value: 1302,
        title: "کالیستا",
      },
      {
        value: 1303,
        title: "مای",
      },
      {
        value: 1304,
        title: "شون",
      },
    ],
  },
  {
    type: "range",
    name: "price-range",
    label: "محدوده قیمت",
    children: null,
    parent: "category",
    options: [
      {
        value: 0,
        title: "حداقل قیمت",
      },
      {
        value: 50000000,
        title: "حداکثر قیمت",
      },
    ],
  },  
]