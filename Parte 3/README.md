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