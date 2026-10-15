
Parte 2 - UI Testing
Sitio utilizado
https://www.demoblaze.com

Arquitectura
Page Object Model (POM)

Page Objects
HomePage
ProductPage
CartPage
PlaceOrderModal
Escenario A
Recorrido de las primeras dos páginas de productos.

Extracción de:

Nombre
Precio
Link
Generación de:

products.txt
Escenario B
Flujo completo de compra.

Pasos:

Selección de producto.
Agregar al carrito.
Acceso al carrito.
Completar formulario.
Compra.
Validación de mensaje de éxito.
Ejecución
npm install
npx playwright test
Modo visual:

npx playwright test --headed
Resultados
Las pruebas generan:

HTML Report
Allure Report
Screenshots de errores
Videos de ejecución