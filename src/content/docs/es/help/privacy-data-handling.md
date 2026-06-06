---
title: Privacidad y manejo de datos
description: Revise la guía de privacidad de ExtraBrain para almacenamiento local, flujo de datos del proveedor, capturas de pantalla, audio de Deepgram y controles de privacidad.
sidebar:
  order: 99
lastUpdated: 2026-04-29
---

Esta descripción general de la privacidad apunta a las guías de privacidad detalladas actuales y resume la distinción más importante del flujo de datos.

![ExtraBrain pestaña de configuración de privacidad](/assets/screenshots/help/dark/settings-privacy.png)

## Conclusiones clave

La privacidad de ExtraBrain está controlada por la ruta de datos que elija para la transcripción, capturas de pantalla, indicaciones, solicitudes de modelo, credenciales de proveedor e historial de sesión local.

- La transcripción local Parakeet puede mantener el trabajo de voz a texto en el Mac.
- Local Gemma 4 puede mantener las indicaciones de AI locales cuando está instalado y es compatible con Mac.
- Los proveedores de modelos externos pueden recibir texto de transcripción, contexto derivado de capturas de pantalla, indicaciones y notas cuando le pides a ExtraBrain que los use.
- Opcional Deepgram puede recibir audio para transcripción en la nube cuando lo configura.

- [Cómo ExtraBrain maneja los datos](/es/help/privacy-security/how-extrabrain-handles-data/)
- [Controles de privacidad](/es/help/privacy-security/privacy-controls/)
- [Comparar precios de aplicaciones y costos de proveedores](/es/pricing/)

ExtraBrain almacena configuraciones, claves API, historial de sesiones locales y datos de transcripción Parakeet locales en su Mac. Cuando utiliza un proveedor de LLM en la nube, se pueden enviar texto relevante, contexto de transcripción, contexto derivado de capturas de pantalla y mensajes al proveedor que seleccionó. Cuando elige Deepgram, el audio se envía a Deepgram para su transcripción. El uso compartido anónimo se puede desactivar.

## Lista de verificación de privacidad

- Utilice el Parakeet local cuando la transcripción de audio deba permanecer en el Mac.
- Revise el proveedor de LLM que seleccione antes de enviar una transcripción confidencial o un contexto derivado de una captura de pantalla.
- Desactive el uso compartido anónimo si no desea que se compartan los datos de uso.
- Elimina el historial de sesiones locales que ya no necesitas.
- Siga las políticas de entrevistas, lugar de trabajo, escuela y clientes antes de utilizar la asistencia de IA.

## Preguntas sobre privacidad

### ¿ExtraBrain envía todo a un servidor?

No. ExtraBrain almacena la configuración, las claves API y el historial de sesión local en su Mac. Los proveedores de la nube reciben contexto solo cuando el flujo de trabajo seleccionado les envía contenido.

### ¿Puede el contexto de la captura de pantalla salir de mi Mac?

Sí, se puede enviar el contexto derivado de una captura de pantalla cuando solicita un análisis a un proveedor de LLM en la nube. Utilice controles de privacidad y elección de proveedor para que coincida con la sesión.
