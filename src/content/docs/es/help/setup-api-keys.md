---
title: Configurar proveedores de IA
description: Configure proveedores ExtraBrain, claves API, suscripciones, puntos finales personalizados y opciones de transcripción para análisis en vivo.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Utilice esta descripción general cuando necesite elegir qué guía de proveedor coincide con su configuración. ExtraBrain admite proveedores de claves API, modos de proveedores de suscripción y puntos finales OpenAI-compatible personalizados.

![ExtraBrain Selector de proveedor de IA](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Conclusiones clave

Un proveedor de IA ExtraBrain es la ruta del modelo que utiliza la aplicación cuando convierte la transcripción, el mensaje, la captura de pantalla o el contexto de la sesión en un análisis en vivo.

- ExtraBrain admite Google Gemma 4 AI local, OpenAI, Anthropic, Claude suscripción, Codex suscripción y puntos finales OpenAI-compatible personalizados.
- Los modos clave API requieren credenciales de proveedor actuales; Los modos de suscripción utilizan la ruta de suscripción iniciada admitida por la aplicación.
- La validación del proveedor debe probarse una vez antes de una entrevista en vivo, una reunión, una conferencia o una llamada de investigación.
- La facturación, la retención, el acceso al modelo y la cuota del proveedor están controlados por la cuenta del proveedor que elija.

- [Conectar un proveedor de IA](/es/help/providers/connect-ai-provider/)
- [Conectar suscripción OpenAI o Codex](/es/help/providers/openai-codex-setup/)
- [Conectar suscripción Anthropic o Claude](/es/help/providers/anthropic-claude-setup/)
- [Usar un punto final OpenAI-compatible personalizado](/es/help/providers/custom-openai-compatible-endpoint/)
- [Elija la transcripción Parakeet o Deepgram](/es/help/providers/transcription-parakeet-vs-deepgram/)
- [Comparar precios de aplicaciones y costos de proveedores](/es/pricing/)

## Lista de verificación de configuración del proveedor

1. Decida si desea el modo de clave API, el modo de suscripción o un punto final personalizado.
2. Abra **Configuración -> Proveedores de LLM**.
3. Ingrese los detalles del proveedor requeridos.
4. Valide o vuelva a verificar la conexión del proveedor.
5. Ejecute un análisis de prueba.
6. Revise [Cómo ExtraBrain maneja los datos](/es/help/privacy-security/how-extrabrain-handles-data/) antes de utilizar contexto confidencial.

## Preguntas del proveedor

### ¿Necesito una clave API para cada modo de proveedor?

No. Los modos de clave OpenAI y Anthropic API requieren claves. Los modos de suscripción Claude y suscripción Codex utilizan acceso de suscripción y no requieren una clave API en ExtraBrain.

### ¿Qué debo verificar si falla la validación del proveedor?

Confirme la clave, el acceso al modelo, la URL base, el estado de la suscripción y el acceso a la red. Los puntos finales personalizados también necesitan el nombre de modelo exacto que espera el punto final.
