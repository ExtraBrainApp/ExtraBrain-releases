---
title: Conecte un proveedor de IA
description: Configure la suscripción OpenAI, Anthropic, Claude, la suscripción Codex o un punto final OpenAI-compatible personalizado en ExtraBrain.
sidebar:
  order: 2
lastUpdated: 2026-04-29
---

ExtraBrain utiliza el proveedor de IA que seleccione para análisis en vivo. La configuración del proveedor controla dónde se pueden enviar mensajes, contexto de transcripción y contexto derivado de capturas de pantalla.

![Selector de proveedor de IA en la incorporación de ExtraBrain](/assets/screenshots/help/dark/onboarding-ai-provider-chooser.png)

## Modos de proveedor público

- Tecla OpenAI API.
- Tecla Anthropic API.
- Codex Suscripción mediante ChatGPT Plus o Pro directamente, sin clave API.
- Claude Suscripción usando Claude Pro o Max directamente, sin clave API.
- Punto final OpenAI-compatible personalizado con URL base, clave API y nombre de modelo.

## Lista de verificación de configuración

1. Abra la incorporación o **Configuración -> Proveedores de LLM**.
2. Elija la familia de proveedores.
3. Elija la clave API o el modo de suscripción.
4. Ingrese las credenciales cuando sea necesario.
5. Valide o vuelva a verificar la conexión.
6. Ejecute un breve análisis de prueba.

![Pestaña de configuración de proveedores de LLM](/assets/screenshots/help/dark/settings-llm-providers.png)

## Flujo de datos

Cuando solicita a ExtraBrain un análisis con un proveedor de la nube, se pueden enviar mensajes relevantes, contexto de transcripción, contexto derivado de capturas de pantalla y preguntas personalizadas a ese proveedor. Los controles de cuenta, retención, cuota y facturación del proveedor se rigen por el proveedor que usted elija.

## Relacionado

- [Conectar suscripción OpenAI o Codex](/es/help/providers/openai-codex-setup/)
- [Conectar suscripción Anthropic o Claude](/es/help/providers/anthropic-claude-setup/)
- [Usar un punto final OpenAI-compatible personalizado](/es/help/providers/custom-openai-compatible-endpoint/)
- [Revisar los precios de ExtraBrain y la separación de costos del proveedor](/es/pricing/)

## Preguntas del proveedor de IA

### ¿Qué proveedor de IA debo elegir primero?

Elige el proveedor en el que ya confías y que puedes validar antes de una sesión real. Para la mayoría de los usuarios, eso significa comenzar con una cuenta OpenAI, Anthropic, Claude o Codex existente.

### ¿Puedo tener preparada más de una ruta de proveedor?

Sí. Mantener una ruta de proveedor de respaldo es útil antes de entrevistas o reuniones en las que la cuota, el acceso a la red o el estado de la cuenta podrían cambiar.
