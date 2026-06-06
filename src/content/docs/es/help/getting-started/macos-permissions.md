---
title: Conceder permisos de audio y pantalla a macOS
description: Descubra por qué ExtraBrain necesita permisos de micrófono, grabación de pantalla y audio del sistema de macOS y cómo solucionar el acceso bloqueado.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain necesita permisos macOS antes de poder usar audio en vivo y contexto de pantalla. Otorgue estos durante la incorporación o desde macOS Configuración del sistema.

![ExtraBrain paso de permisos durante la incorporación](/assets/screenshots/help/dark/onboarding-permissions.png)

## Permisos ExtraBrain Usos

| Permiso | Por qué lo usa ExtraBrain |
| --- | --- |
| Micrófono | Transcribe su audio hablado durante las sesiones en vivo. |
| Grabación de pantalla | Captura capturas de pantalla y el contexto de la pantalla que usted le pide a ExtraBrain que analice. |
| Audio del sistema | Captura audio de reuniones, llamadas o videos cuando la sesión necesita sonido del sistema. |

## Abrir configuración de macOS

1. Abra **Configuración del sistema**.
2. Vaya a **Privacidad y seguridad**.
3. Marque **Micrófono**, **Grabación de pantalla** y las indicaciones relacionadas con el audio del sistema si macOS las muestra.
4. Habilite ExtraBrain.
5. Reinicie ExtraBrain si macOS lo solicita o si el estado del permiso no se actualiza inmediatamente.

## Si un permiso todavía parece bloqueado

- Salir y volver a abrir ExtraBrain.
- Activa y desactiva el permiso en Configuración del sistema.
- Reinicie el Mac si la grabación de pantalla permanece bloqueada.
- Vuelva a abrir la incorporación o la configuración después de reiniciar.

Las advertencias de permiso como "Micrófono detenido", "Audio del sistema detenido" o "Audio detenido" significan que ExtraBrain perdió el acceso a parte del proceso de captura y necesita permiso o recuperación del dispositivo.

## Preguntas sobre permisos

### ¿Por qué ExtraBrain necesita permiso de grabación de pantalla?

La grabación de pantalla permite a ExtraBrain capturar capturas de pantalla y el contexto de la pantalla que usted utiliza explícitamente para el análisis. Sin él, los flujos de trabajo de captura de pantalla y contexto de pantalla pueden fallar.

### ¿Por qué ExtraBrain necesita permiso de audio del sistema?

El audio del sistema ayuda a ExtraBrain a capturar el contexto de reuniones, llamadas, videos o audio compartido cuando es compatible. Sin él, es posible que solo veas la transcripción del micrófono.
