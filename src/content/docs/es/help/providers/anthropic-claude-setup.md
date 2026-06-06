---
title: Conecte la suscripción Anthropic o Claude
description: Configure el modo de clave Anthropic API o el modo de suscripción Claude en ExtraBrain, valide el acceso, elija modelos y solucione problemas de inicio de sesión.
sidebar:
  order: 4
lastUpdated: 2026-04-29
---

ExtraBrain admite el modo de clave Anthropic API y el modo de suscripción Claude.

## Anthropic API Modo clave

Utilice este modo cuando desee que ExtraBrain llame a Anthropic a través de una clave API que usted administre.

1. Abra **Configuración -> Proveedores de LLM**.
2. Seleccione **Anthropic**.
3. Pegue su clave Anthropic API.
4. Elige el modelo.
5. Valide la clave.
6. Ejecute un breve análisis de prueba.

![Pestaña de configuración de proveedores de LLM con Anthropic seleccionado](/assets/screenshots/help/dark/settings-llm-providers.png)

## Claude Modo de suscripción

Utilice la suscripción Claude cuando desee que ExtraBrain use su suscripción Claude Pro o Max directamente. Este modo no requiere una clave API en ExtraBrain.

1. Abra **Configuración -> Proveedores de LLM**.
2. Elija **Claude Suscripción**.
3. Vuelva a verificar el estado de inicio de sesión.
4. Elija el modelo disponible.
5. Ejecute un análisis de prueba.

## Solución de problemas

Si la validación falla, confirme que la clave API pertenece a la cuenta Anthropic correcta, tiene acceso al modelo y está pegada sin espacios adicionales. Para el modo de suscripción, confirme que su suscripción Claude esté activa y haya iniciado sesión donde ExtraBrain la espera.

## Preguntas Anthropic y Claude

### ¿Necesito una clave Anthropic API para el modo de suscripción Claude?

No. Claude El modo de suscripción está diseñado para Claude Pro o acceso de suscripción máximo y no requiere una clave Anthropic API dentro de ExtraBrain.

### ¿Qué datos se pueden enviar a Anthropic o Claude?

Cuando se selecciona para el análisis, las indicaciones relevantes, el contexto de la transcripción, el contexto derivado de capturas de pantalla y las preguntas personalizadas se pueden enviar a Anthropic o Claude según el modo de proveedor.
