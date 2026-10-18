# React
- First Render (2 items): when load/reload web. React component -> render UI 2 items
- Re-render: user update state (3 items) -> component react re-render (receive new state - 3 items) -> render UI with 3 items 
- libs (react) and framework (angular,vue)
  - react, react-dom: management render DOM
  - react-router: navigate pages
  - axios: call api
  - fullcalendar
- SPA (single page app) and MPA (multi page app)

# Why create common component
- Can reuse
- Avoid duplicate code


# Naming convention
- camelCase: product, productDetail, getUser, getUserByRole ... => helper function (FE, BE), name variable ...
- PascalCase: Product, ContactUs, BannerAnnouncement ... => name component react, name folder, name file ...
- kebab-case: product, product-config, management-user ... => path, route, name folder, name file ...
- snake_case: user, first_name, last_name ... => param body data, response data ... 
  {
    first_name: 'tony',
    last_name: 'nguyen
  }

# Rule
- All name file, name folder is kebab-case
- Name function component react: Pascal Case