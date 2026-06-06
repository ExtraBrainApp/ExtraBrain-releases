---
title: Configurar ExtraBrain por primera vez
description: Complete la incorporación de ExtraBrain en macOS otorgando permisos, eligiendo la transcripción y conectando un proveedor de IA.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

La configuración de primera ejecución obtiene ExtraBrain desde el inicio hasta una sesión en vivo utilizable. El flujo de incorporación cubre la bienvenida, los permisos macOS, el proveedor de transcripción, el proveedor de IA y la finalización.

![ExtraBrain pantalla de bienvenida de incorporación](/assets/screenshots/help/dark/onboarding-welcome.png)

## 1. Iniciar la incorporación

Abra ExtraBrain y continúe desde la pantalla de bienvenida. Mantenga la aplicación abierta mientras completa los permisos y la configuración del proveedor.

## 2. Otorgar permisos macOS

ExtraBrain necesita permiso para escuchar y ver el contexto que elige utilizar:

- Micrófono para tu audio hablado.
- Grabación de pantalla para capturas de pantalla y contexto de pantalla.
- Audio del sistema para llamadas, reuniones, videos o transcripción de audio compartido cuando sea compatible.

Consulte [Conceder permisos a macOS](/es/help/getting-started/macos-permissions/) para conocer los pasos de recuperación si macOS mantiene un permiso en estado pendiente o denegado.

## 3. Elija Transcripción

Elija un modo de transcripción:

- El Parakeet local se ejecuta en su Mac y no requiere una clave API.
- Deepgram usa transcripción en la nube y requiere una clave Deepgram API.

![Selección del proveedor de transcripción en la incorporación](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## 4. Conecte la IA

Elija la familia de proveedores de IA y el método de conexión que ExtraBrain debe utilizar para el análisis en vivo. Los modos de proveedor público incluyen OpenAI, Anthropic, Claude Suscripción, Codex Suscripción y puntos finales personalizados OpenAI-compatible.

![Selector de proveedor de IA en la incorporación](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

La opción de modelo local que se muestra en la incorporación está deshabilitada y no debe considerarse como una configuración pública disponible.

## 5. Ejecute una prueba breve

Antes de una entrevista o reunión real:

- comenzar a grabar
- aparecen las entradas de confirmación de transcripción
- captura una captura de pantalla si el contexto de la pantalla es importante
- ejecutar un análisis
- confirme que la respuesta proviene del proveedor que esperaba

## Relacionado

- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/)
- [Conectar un proveedor de IA](/es/help/providers/connect-ai-provider/)
- [Atajos de teclado](/es/help/settings/keyboard-shortcuts/)

## Preguntas de configuración

### ¿Puedo cambiar de proveedor después de la configuración inicial?

Sí. Puede cambiar la transcripción en **Configuración -> Audio** y cambiar los proveedores de IA en **Configuración -> Proveedores de LLM**. Ejecute una breve prueba después de cambiar cualquiera de las configuraciones.

### ¿Qué debo hacer si la incorporación no puede continuar?

Verifique los permisos macOS, la validación del proveedor y los campos obligatorios. Deepgram requiere una clave válida, mientras que Local Parakeet puede continuar sin una clave API.
