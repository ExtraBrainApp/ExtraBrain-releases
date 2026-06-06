---
title: Utilice un punto final personalizado compatible con OpenAI
description: Configure un punto final OpenAI-compatible personalizado en ExtraBrain con URL base, clave API, nombre de modelo, validación y solución de problemas.
sidebar:
  order: 5
lastUpdated: 2026-04-29
---

Utilice un punto final OpenAI-compatible personalizado cuando su proveedor o proxy exponga un API de estilo OpenAI.

![ExtraBrain configuración personalizada del proveedor OpenAI-compatible con URL base y campos de nombre de modelo](/assets/screenshots/help/dark/settings-custom-provider.png)

## Campos obligatorios

| Campo | Qué ingresar |
| --- | --- |
| URL básica | La URL base del proveedor o proxy API. |
| Tecla API | La clave requerida por ese punto final. |
| Nombre del modelo | El identificador de modelo exacto que espera el punto final. |

## Pasos de configuración

1. Abra la incorporación o **Configuración -> Proveedores de LLM**.
2. Elija la opción de proveedor personalizado.
3. Ingrese la URL base.
4. Ingrese la clave API.
5. Ingrese el nombre del modelo.
6. Valide la configuración.
7. Ejecute un breve análisis de prueba.

## Errores comunes

- Falta `/v1` cuando el proveedor lo espera.
- Usar un nombre para mostrar de modelo en lugar del identificador de modelo API.
- Pegar una clave para el proveedor o proxy incorrecto.
- Olvidar que las reglas de retención, facturación y acceso del proveedor están controladas por el operador del punto final personalizado.

Las solicitudes personalizadas de proveedores pueden incluir indicaciones, contexto de transcripción, contexto derivado de capturas de pantalla y preguntas personalizadas.

## Preguntas personalizadas sobre terminales

### ¿Qué hace que un punto final sea OpenAI-compatible?

El punto final debe aceptar solicitudes de chat o respuestas de estilo OpenAI API utilizando la URL base, la clave y el nombre del modelo que ingresa en ExtraBrain.

### ¿Qué debo probar después de guardar un punto final personalizado?

Ejecute un análisis breve con una transcripción no confidencial o un contexto de captura de pantalla. Confirme que el punto final devuelva una respuesta y que el nombre del modelo coincida con lo que espera su proveedor o proxy.
