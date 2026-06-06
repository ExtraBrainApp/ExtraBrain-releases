---
title: Conecte la suscripción OpenAI o Codex
description: Configure el modo de clave OpenAI API o el modo de suscripción Codex en ExtraBrain, valide el acceso, elija modelos y solucione problemas de configuración.
sidebar:
  order: 3
lastUpdated: 2026-04-29
---

ExtraBrain admite el modo de clave OpenAI API y el modo de suscripción Codex.

## OpenAI API Modo clave

Utilice este modo cuando desee que ExtraBrain llame a OpenAI a través de una clave API que usted administre.

1. Abra **Configuración -> Proveedores de LLM**.
2. Seleccione **OpenAI**.
3. Pegue su clave API.
4. Elija el modelo y el esfuerzo de razonamiento cuando esté disponible.
5. Valide la clave.
6. Ejecute un breve análisis para confirmar que las respuestas provienen de OpenAI.

![OpenAI formulario de proveedor en la incorporación](/assets/screenshots/help/dark/onboarding-openai-provider-form.png)

## Codex Modo de suscripción

Utilice la suscripción Codex cuando desee que ExtraBrain use su suscripción ChatGPT Plus o Pro directamente. Este modo no requiere una clave API en ExtraBrain.

1. Abra **Configuración -> Proveedores de LLM**.
2. Elija **Codex Suscripción**.
3. Vuelva a verificar el estado de inicio de sesión.
4. Elija el modelo disponible.
5. Ejecute un análisis de prueba.

## Solución de problemas

Si la validación falla, verifique que la clave esté actualizada, tenga acceso al modelo que seleccionó y no esté bloqueada por un proxy o una política de la organización. Para el modo de suscripción, confirme que el entorno de escritorio pueda acceder a las herramientas del proveedor registrado.

## Preguntas OpenAI y Codex

### ¿Necesito una clave OpenAI API para el modo de suscripción Codex?

No. Codex El modo de suscripción utiliza el acceso de suscripción ChatGPT Plus o Pro directamente y no requiere una clave OpenAI API en ExtraBrain.

### ¿Qué puede enviar ExtraBrain a OpenAI o Codex?

Cuando se selecciona para el análisis, ExtraBrain puede enviar indicaciones, contexto de transcripción, contexto derivado de capturas de pantalla y preguntas personalizadas necesarias para la respuesta.
