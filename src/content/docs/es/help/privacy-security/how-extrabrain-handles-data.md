---
title: Cómo ExtraBrain maneja los datos
description: Comprenda qué almacena ExtraBrain localmente, qué se puede enviar a proveedores de IA seleccionados y cuándo recibe audio Deepgram.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain es una aplicación de escritorio local, pero su flujo de datos exacto depende de los proveedores y las funciones que elija.

![Configuración de privacidad en ExtraBrain](/assets/screenshots/help/dark/settings-privacy.png)

## Redacción de privacidad precisa

ExtraBrain almacena configuraciones, claves API, historial de sesiones locales y datos de transcripción Parakeet locales en su Mac. Cuando utiliza un proveedor de LLM en la nube, se pueden enviar texto relevante, contexto de transcripción, contexto derivado de capturas de pantalla y mensajes al proveedor que seleccionó. Cuando elige Deepgram, el audio se envía a Deepgram para su transcripción. El uso compartido anónimo se puede desactivar.

## Lo que queda en tu Mac

- configuración de la aplicación
- configuración del proveedor y claves API almacenadas por la aplicación
- historial de sesión local
- transcripciones y capturas de pantalla guardadas en el historial de sesiones local
- datos de transcripción locales Parakeet

## ¿Qué puede dejar su Mac?

| Elección | Qué se puede enviar |
| --- | --- |
| OpenAI, Anthropic, Claude Suscripción, Codex Suscripción o proveedor de LLM personalizado | Mensajes, contexto de transcripción, contexto derivado de capturas de pantalla, preguntas personalizadas y otro contexto de análisis seleccionado. |
| Deepgram transcripción | Audio enviado a Deepgram para su transcripción. |
| Uso compartido anónimo | Datos de uso cuando está habilitado. |

## Control de proveedores

La retención de proveedores externos, la facturación, la cuota, el acceso al modelo y las políticas de cuenta están controladas por el proveedor que usted elija. Revise la configuración de ese proveedor si maneja entrevistas, lugares de trabajo, clientes o material de investigación delicado.

## Relacionado

- [Controles de privacidad](/es/help/privacy-security/privacy-controls/)
- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/)
- [Conectar un proveedor de IA](/es/help/providers/connect-ai-provider/)

## Preguntas sobre el manejo de datos

### ¿Cuál es la configuración de transcripción más privada?

Utilice el Parakeet local cuando la transcripción de audio deba permanecer en el Mac. Evite Deepgram para sesiones en las que el audio no deba enviarse a un proveedor de transcripción en la nube.

### ¿Quién controla la retención de proveedores de nube?

El proveedor que elija controla sus políticas de retención, facturación, cuotas y cuentas. Revise OpenAI, Anthropic, Claude, Codex, Deepgram o la configuración personalizada del punto final antes de enviar contexto confidencial.
