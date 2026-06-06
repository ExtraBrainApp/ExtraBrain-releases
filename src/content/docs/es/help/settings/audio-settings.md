---
title: Configurar los ajustes de audio ExtraBrain
description: Configure el proveedor de transcripción, la clave Deepgram API, el dispositivo de micrófono, la limpieza de transcripción, el activador de voz y el permiso de audio del sistema en ExtraBrain.
sidebar:
  label: Configuración de audio
  order: 5
lastUpdated: 2026-04-30
---

Utilice **Configuración -> Audio** para elegir el comportamiento de transcripción y la entrada del micrófono.

![ExtraBrain configuración de audio con proveedor de transcripción y controles de micrófono](/assets/screenshots/help/dark/settings-audio.png)

## Controles de audio

| Controlar | Lo que cambia |
| --- | --- |
| Proveedor de voz a texto | Transcripción en la nube local Parakeet o Deepgram. |
| Deepgram API clave | Requerido solo cuando se selecciona Deepgram. |
| Fuente de audio | Entrada de micrófono preferida. |
| Activador de voz | Control de frases habladas para iniciar el análisis durante una sesión activa. |
| Limpieza de transcripciones | Eliminación de palabras de relleno antes del análisis y las tarjetas de expedientes académicos. |
| Permiso de audio del sistema | macOS flujo de permisos para capturar el audio de la aplicación /system cuando sea necesario. |

## Notas

- Los cambios en el dispositivo de audio se aplican a las nuevas sesiones.
- Local Parakeet mantiene la transcripción local.
- Deepgram envía audio a Deepgram para su transcripción.
- ExtraBrain puede necesitar macOS permisos de audio del sistema y del micrófono antes de que funcione la grabación.

## Relacionado

- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/)
- [Conceder permisos macOS](/es/help/getting-started/macos-permissions/)
- [Limpiar transcripciones y palabras de relleno](/es/help/settings/transcript-cleanup-filler-words/)
- [Usar frases de activación de voz](/es/help/settings/voice-trigger/)

## Preguntas comunes

### ¿Por qué ExtraBrain dice que no se encontraron dispositivos?

Es posible que macOS aún no haya otorgado permiso al micrófono o que la entrada seleccionada no esté disponible. Conceda permiso, vuelva a conectar el micrófono y luego inicie una nueva sesión.

### ¿El cambio de proveedor de transcripción afecta la sesión actual?

Los cambios de proveedor y dispositivo son más seguros cuando se aplican antes de que comience una sesión. Detenga la grabación y comience una nueva sesión después de cambios importantes en el audio.

