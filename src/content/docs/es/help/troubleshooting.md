---
title: Solución de problemas
description: Solucione problemas con el micrófono ExtraBrain, la grabación de pantalla, el audio del sistema, la tecla API, Deepgram, la captura de pantalla, la ventana oculta y el historial de sesiones.
sidebar:
  order: 6
lastUpdated: 2026-04-29
---

Utilice esta página cuando ExtraBrain no esté capturando audio, no pueda validar un proveedor, pierda capturas de pantalla o sea difícil de recuperar durante una sesión en vivo.

![ExtraBrain paso de permisos para solucionar problemas de acceso al micrófono, la pantalla y el audio del sistema](/assets/screenshots/help/dark/onboarding-permissions.png)

## Conclusiones clave

La solución de problemas de ExtraBrain es la ruta de recuperación para los 6 bloqueadores más comunes: permiso de micrófono, permiso de grabación de pantalla, audio del sistema, validación de proveedor, validación de Deepgram y visibilidad de ventana.

- La mayoría de los problemas de captura comienzan en macOS Privacidad y seguridad, luego requieren salir y volver a abrir ExtraBrain.
- Las fallas del proveedor generalmente involucran el modelo seleccionado, la clave API, el acceso a la suscripción, la URL base, la cuota o el acceso a la red.
- El análisis de capturas de pantalla requiere una sesión activa, permiso de grabación de pantalla y el modo de captura esperado.
- Las sesiones activas no se pueden eliminar hasta que se detenga la grabación.

## Se requiere permiso de micrófono

Si la captura del micrófono no comienza:

1. Abra **Configuración del sistema -> Privacidad y seguridad -> Micrófono**.
2. Habilite ExtraBrain.
3. Salga y vuelva a abrir ExtraBrain si macOS lo solicita.
4. Inicie una breve sesión de prueba.

Consulte [Conceder permisos macOS](/es/help/getting-started/macos-permissions/).

## La grabación de pantalla o el audio del sistema no funcionan

La Grabación de pantalla controla las capturas de pantalla y el contexto de la pantalla. El audio del sistema controla la transcripción de reuniones, llamadas, videos o audio compartido cuando es compatible.

Verifique si hay chips de advertencia como "Micrófono detenido", "Audio del sistema detenido" o "Audio detenido". Luego vuelva a abrir macOS Configuración de privacidad y seguridad, otorgue acceso y reinicie ExtraBrain si es necesario.

## API Falló la validación de clave

Para OpenAI, Anthropic o un punto final personalizado:

- confirme que la clave esté actualizada
- eliminar espacios adicionales
- confirmar que el modelo seleccionado esté disponible para la cuenta
- confirmar que un punto final personalizado tiene una URL base y un nombre de modelo
- verifique las restricciones de proxy u organización

Luego valide nuevamente en **Configuración -> Proveedores de LLM**.

## Deepgram Error de validación

Deepgram requiere una clave Deepgram API válida. Si la validación falla, pegue una clave nueva, vuelva a intentar la validación o vuelva a Local Parakeet desde la incorporación o **Configuración -> Audio**.

## Las capturas de pantalla no aparecen en el análisis

Comprueba que:

- una sesión está activa
- Se concede permiso de grabación de pantalla.
- el modo de captura en **Configuración -> Captura de pantalla** coincide con lo esperado
- la entrada de la captura de pantalla aparece en el panel de transcripción

Las capturas de pantalla son artefactos de sesión local. Se puede enviar contexto derivado de capturas de pantalla cuando solicita un análisis a un proveedor de LLM en la nube.

## La ventana principal está oculta o es difícil hacer clic en ella

Si la superposición está oculta o hacer clic dificulta la interacción:

1. Utilice el acceso directo de la ventana de alternancia.
2. Desactive el clic en **Configuración -> Privacidad**.
3. Vuelva a habilitar la visibilidad del Dock o de la barra de menú si necesita una ruta de recuperación visible.

## La eliminación del historial de sesiones está deshabilitada

Las sesiones activas no se pueden eliminar. Primero detenga la grabación, luego regrese a **Configuración -> Sesiones** y elimine la sesión.

## Guías relacionadas

- [Configurar ExtraBrain por primera vez](/es/help/getting-started/first-run-setup/)
- [Conectar un proveedor de IA](/es/help/providers/connect-ai-provider/)
- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/)
- [Controles de privacidad](/es/help/privacy-security/privacy-controls/)

## Preguntas para solucionar problemas

### ¿Qué debo verificar primero si ExtraBrain no está grabando?

Verifique el permiso del micrófono, el permiso de audio del sistema, el dispositivo de audio seleccionado y si una sesión ya se está iniciando o deteniendo.

### ¿Qué debo comprobar primero si el análisis falla?

Verifique el proveedor de IA seleccionado, la clave API o el estado de la suscripción, los campos de punto final personalizados y si la sesión actual tiene un contexto de transcripción o captura de pantalla para analizar.
