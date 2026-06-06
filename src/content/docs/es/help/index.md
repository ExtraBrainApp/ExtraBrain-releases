---
title: Centro de ayuda
description: ExtraBrain ayuda para macOS entrevistas en vivo, reuniones, transcripciones, capturas de pantalla, proveedores de inteligencia artificial, privacidad, configuraciones y resolución de problemas.
sidebar:
  label: Descripción general
  order: 1
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
prev: false
next: false
lastUpdated: 2026-04-29
---

ExtraBrain es el primer asistente de IA en vivo de macOS para entrevistas, reuniones, rondas de codificación, discusiones sobre diseño de sistemas, entrevistas de comportamiento, resolución de problemas y conversaciones técnicas densas. Utilice este centro de ayuda para configurar la aplicación, elegir proveedores, comprender la privacidad y recuperarse de problemas comunes con permisos o proveedores.

![ExtraBrain sesión en vivo ampliada con transcripción y paneles de análisis](/assets/screenshots/help/dark/main-analysis-followups.png)

## Conclusiones clave

ExtraBrain es un asistente de entrevistas y copiloto de reuniones con IA de escritorio Mac local con una aplicación principal gratuita, controles de flujo de trabajo Pro opcionales, transcripción en vivo, capturas de pantalla, análisis respaldado por el proveedor, IA local Gemma 4 en el dispositivo cuando esté instalada y sea compatible, y revisión posterior a la sesión.

- Utilice el centro de ayuda para desplazarse por 4 áreas de configuración: instalación, permisos, transcripción y acceso al proveedor de IA.
- ExtraBrain es compatible con Mac hoy, incluidos Apple Silicon e Intel Mac.
- La aplicación admite transcripción NVIDIA Parakeet local, suscripción Deepgram, OpenAI, Anthropic, Claude, suscripción Codex opcional y puntos finales OpenAI-compatible personalizados.
- La privacidad depende de la ruta de datos seleccionada: la transcripción local Parakeet y la Gemma 4 local pueden mantener la transcripción y las indicaciones de IA en el Mac, mientras que los proveedores de la nube reciben el contexto que usted elija enviar.

## Comience aquí

- [¿Qué es ExtraBrain?](/es/help/getting-started/what-is-extrabrain/) explica la aplicación, la transcripción en vivo, capturas de pantalla, perfiles, seguimientos e historial de sesiones.
- [Configurar ExtraBrain por primera vez](/es/help/getting-started/first-run-setup/) recorre la incorporación desde la bienvenida hasta la configuración del proveedor.
- [Conceder permisos macOS](/es/help/getting-started/macos-permissions/) explica el micrófono, la grabación de pantalla y el acceso de audio del sistema.
- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/) compara la transcripción local y en la nube.
- [Conectar un proveedor de IA](/es/help/providers/connect-ai-provider/) cubre OpenAI, Anthropic, suscripciones y puntos finales personalizados.

## Utilice ExtraBrain en vivo

- [Iniciar grabación y solicitar análisis](/es/help/using-extrabrain/start-recording-and-analysis/) cubre los principales controles en vivo.
- [Usar capturas de pantalla y contexto de pantalla](/es/help/using-extrabrain/screenshots-screen-context/) explica los modos de captura y el contexto de captura de pantalla.
- [Usar preguntas de seguimiento](/es/help/using-extrabrain/follow-up-questions/) explica los seguimientos sugeridos y las preguntas personalizadas.
- [Analizar temas y preguntas detectados](/es/help/using-extrabrain/detected-topics-questions/) explica el tema de la transcripción y las tarjetas de preguntas.

## Privacidad, configuración e historial

- [Cómo ExtraBrain maneja los datos](/es/help/privacy-security/how-extrabrain-handles-data/) proporciona el flujo de datos local versus proveedor más claro.
- [Controles de privacidad](/es/help/privacy-security/privacy-controls/) cubre la ocultación de superposiciones, los clics, la visibilidad de las aplicaciones y el uso compartido.
- [Descripción general de configuración](/es/help/settings/) enlaza a cada pestaña de configuración pública.
- [Configurar ajustes de audio](/es/help/settings/audio-settings/) cubre el proveedor de transcripción, el micrófono, el activador de voz y los controles de limpieza de transcripción.
- [Usar perfiles ExtraBrain](/es/help/settings/profiles/) explica el comportamiento de los perfiles automáticos, anclados, del sistema y personalizados.
- [Atajos de teclado](/es/help/settings/keyboard-shortcuts/) enumera los atajos predeterminados y dónde editarlos.
- [Ver y eliminar el historial de sesiones](/es/help/sessions-history/view-delete-session-history/) cubre transcripciones, análisis, hechos, capturas de pantalla y eliminación.
- [Activar ExtraBrain Pro](/es/help/billing-pro/activate-license/) explica la compra desde la aplicación, la activación y desactivación de la licencia.
- [Compare ExtraBrain Free y Pro](/es/pricing/free-vs-pro/) muestra lo que desbloquea Pro.

## Solución de problemas

Comience con [Solución de problemas](/es/help/troubleshooting/) si el permiso del micrófono, la grabación de pantalla, el audio del sistema, la validación de la clave API, la validación Deepgram, las capturas de pantalla, las ventanas ocultas o la eliminación de la sesión no funcionan como se esperaba.

## Preguntas comunes

### ¿ExtraBrain envía todo a un servidor?

No. ExtraBrain almacena configuraciones, claves API, historial de sesión local y datos de transcripción Parakeet local en su Mac. Cuando utiliza un proveedor de LLM en la nube, se pueden enviar texto relevante, contexto de transcripción, contexto derivado de capturas de pantalla y mensajes al proveedor que seleccionó. Cuando elige Deepgram, el audio se envía a Deepgram para su transcripción.

### ¿ExtraBrain admite Windows o Linux?

ExtraBrain es macOS-primero hoy. Windows y Linux son objetivos planificados, no objetivos actuales de publicación pública.

### ¿La pestaña Configuración remota es pública?

No. La pestaña Remoto es solo de desarrollo y no está documentada como una característica pública.
