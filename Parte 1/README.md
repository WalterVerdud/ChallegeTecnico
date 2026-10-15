Parte 1 - API Testing
Herramientas
Playwright
TypeScript
Swagger Petstore
Escenario A
Creación de:

5 mascotas available
4 mascotas pending
1 mascota sold
Obtención y validación de la mascota sold.

Escenario B
Consulta de mascotas available.
Almacenamiento de 5 mascotas.
Creación de órdenes para cada mascota.
Escenario C
Creación de mascota.
Cambio de estado available → sold.
Validación del cambio.
Manejo explícito de errores del servicio.
Parte 3
Reporte elegido
Allure Report

Configuración
npm install -D allure-playwright
reporter: [
  ["html"],
  ["allure-playwright"]
]
use: {
  screenshot: "only-on-failure",
  video: "retain-on-failure",
  trace: "on-first-retry"
}
Generación
npx playwright test
allure generate allure-results --clean
allure open
Parte 4.1
Paralelización
Se configuró:

fullyParallel: true
workers: 4
Estrategia
Uso de datos dinámicos para evitar conflictos:

Date.now()
randomId()
Impacto
Sin paralelización:

~10 segundos
Con paralelización:

~5 segundos
Reducción estimada: 50%.

Parte 4.2
Herramienta elegida
GitHub Actions

Pipeline
Archivo:

.github/workflows/playwright.yml
Funcionalidad
Checkout
Instalación de dependencias
Instalación de Playwright
Ejecución de pruebas
Publicación de reportes
Ejecución
El pipeline se ejecuta automáticamente ante:

Push
Pull Request