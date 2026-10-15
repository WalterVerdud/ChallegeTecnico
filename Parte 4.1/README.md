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