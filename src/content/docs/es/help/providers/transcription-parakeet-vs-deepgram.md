---
title: Elija un proveedor de transcripción
description: Compare la transcripción local Parakeet y Deepgram en ExtraBrain por privacidad, tiempo de configuración, requisitos clave API y flujo de datos.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain convierte la voz en vivo en texto con NVIDIA Parakeet o Deepgram local.

![Transcripción local seleccionada durante la incorporación](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## Comparación rápida

| Opción | Mejor para | Flujo de datos | Configuración |
| --- | --- | --- | --- |
| Local Parakeet | La mayoría de los usuarios, sesiones sensibles a la privacidad, configuración más rápida | La transcripción se ejecuta en su Mac | Sin clave API |
| Deepgram | Usuarios que ya dependen de la transcripción administrada en la nube | El audio se envía a Deepgram | Deepgram API clave requerida |

## Local Parakeet

Elija Local Parakeet cuando desee la configuración más simple y prefiera que la transcripción se realice en Mac. Requiere almacenamiento de modelo local y utiliza CPU local mientras se ejecuta el modelo.

## Deepgram

Elija Deepgram cuando la transcripción en la nube se ajuste a su flujo de trabajo o su organización ya utilice Deepgram. Deepgram requiere una clave API válida.

![Deepgram campo clave durante la incorporación](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

Una vez que la validación sea exitosa, ExtraBrain puede continuar con la incorporación con Deepgram seleccionado.

![Deepgram validación exitosa durante la incorporación](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## Nota de privacidad

Local Parakeet mantiene la transcripción local. Deepgram envía audio a Deepgram para su transcripción. El análisis de IA es una opción separada y puede enviar texto de transcripción o contexto derivado de captura de pantalla al proveedor de LLM que seleccionó.

## Relacionado

- [Configurar ajustes de audio ExtraBrain](/es/help/settings/audio-settings/)
- [Limpiar transcripciones y palabras de relleno](/es/help/settings/transcript-cleanup-filler-words/)
- [Usar frases de activación de voz](/es/help/settings/voice-trigger/)
- [Cómo ExtraBrain maneja los datos](/es/help/privacy-security/how-extrabrain-handles-data/)

## Preguntas de transcripción

### ¿Qué proveedor de transcripción es mejor para la privacidad?

El Parakeet local es el mejor valor predeterminado cuando el audio debe permanecer en su Mac. No requiere una clave Deepgram API.

### ¿Cuándo debo elegir Deepgram?

Elija Deepgram cuando la transcripción en la nube se ajuste a la sesión, su organización ya use Deepgram o prefiera la transcripción administrada y acepte que el audio se envíe a Deepgram.
