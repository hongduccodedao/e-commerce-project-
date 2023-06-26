const path = {
  PUBLIC: "/",
  HOME: "",
  LOGIN: "login",
  PRODUCTS: ":category",
  BLOGS: "blogs",
  OUR_SERVICES: "services",
  FAQ: "faqs",
  DETAIL_PRODUCT__CATEGORY__PID__TITLE: ":category/:pid/:title",
  DETAIL_PRODUCT: "products",
  FINAL_REGISTER: "finalregister/:status",
  RESET_PASSWORD: "reset-password/:token",


  // ADMIN
  ADMIN: "admin",
  DASHBOARD: "dashboard",
  MANAGE_USER: "manage-user",
  MANAGE_PRODUCT: "manage-product",
  MANAGE_ORDER: "manage-order",
  CREATE_PRODUCT: "create-product",

  // MEMBER
  MEMBER: "member",
  PERSONAL: "personal",


  ALL: "*",
};

export default path;
