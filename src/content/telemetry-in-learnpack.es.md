# ¿Cómo funciona la telemetría en LearnPack?

La telemetría es un aspecto crucial de las aplicaciones modernas, ya que permite a los desarrolladores comprender cómo los usuarios interactúan con su software. LearnPack ha introducido recientemente la telemetría para mejorar la experiencia del usuario mediante el seguimiento de diversas métricas.

### ¿Qué sabe LearnPack sobre ti?
LearnPack recopila información sobre tu uso y la almacena en un archivo local llamado **telemetry.json** dentro del directorio .learn. Este archivo incluye datos sobre compilaciones, pruebas, interacciones con la IA (si has iniciado sesión), tiempos de inicio y fin de sesión, finalización de pasos y cuándo abres un nuevo paso. Aquí tienes un desglose de las mediciones relacionadas con tus acciones:

- **Botón Ejecutar**: Al hacer clic en "ejecutar", se registra el resultado de la compilación, incluyendo tu código, la salida estándar (stdout), cualquier error (stderr) y el código de salida.
- **Botón Ejecutar Pruebas**: Inicia el almacenamiento de los resultados de la compilación de pruebas, capturando stdout, código de salida, archivo fuente, tiempo de ejecución y stderr para errores.
- **Nuevo Paso**: La primera vez que haces clic en "siguiente" en un ejercicio, LearnPack registra el tiempo para evaluar cuánto tardas en completar cada paso.
- **Interacción con la IA**: Para los estudiantes de 4Geeks que han iniciado sesión, se rastrean las interacciones con el Tutor IA para refinar el LLM y desarrollar una experiencia de tutoría óptima.

Estos datos se almacenan localmente, pero pueden enviarse a nuestros servidores para su análisis si has iniciado sesión. Ten la seguridad de que no se recopila información personal sensible, solo datos de uso de la aplicación para informar mejoras.

**Nota**: Tu privacidad es importante. Solo recopilamos datos de uso no sensibles para mejorar el rendimiento y la experiencia del usuario de LearnPack.
