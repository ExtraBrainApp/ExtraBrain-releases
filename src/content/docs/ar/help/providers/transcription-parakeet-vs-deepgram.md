---
title: اختر موفر النسخ
description: قارن النسخ المحلي Parakeet وDeepgram في ExtraBrain حسب الخصوصية ووقت الإعداد والمتطلبات الأساسية API وتدفق البيانات.
sidebar:
  order: 1
lastUpdated: 2026-04-29
---

ExtraBrain يحول الكلام المباشر إلى نص باستخدام NVIDIA Parakeet محلي أو Deepgram.

![تم تحديد النسخ المحلي أثناء الإعداد](/assets/screenshots/help/dark/onboarding-transcription-local.png)

## مقارنة سريعة

| خيار | أفضل ل | تدفق البيانات | يثبت |
| --- | --- | --- | --- |
| محلي Parakeet | معظم المستخدمين، جلسات حساسة للخصوصية، أسرع إعداد | يتم تشغيل النسخ على Mac الخاص بك | لا يوجد مفتاح API |
| Deepgram | المستخدمون الذين يعتمدون بالفعل على النسخ السحابي المُدار | يتم إرسال الصوت إلى Deepgram | Deepgram API مطلوب مفتاح |

## محلي Parakeet

اختر محلي Parakeet عندما تريد الإعداد الأبسط وتفضل إجراء النسخ على Mac. يتطلب تخزين النموذج المحلي ويستخدم وحدة المعالجة المركزية المحلية أثناء تشغيل النموذج.

## Deepgram

اختر Deepgram عندما يناسب النسخ السحابي سير عملك أو عندما تستخدم مؤسستك Deepgram بالفعل. يتطلب Deepgram مفتاح API صالحًا.

![Deepgram الحقل الرئيسي أثناء الإعداد](/assets/screenshots/help/dark/onboarding-transcription-deepgram-key.png)

بعد نجاح التحقق من الصحة، يمكن لـ ExtraBrain مواصلة الإعداد مع تحديد Deepgram.

![Deepgram نجاح التحقق من الصحة أثناء الإعداد](/assets/screenshots/help/dark/onboarding-transcription-deepgram-valid.png)

## ملاحظة الخصوصية

يحتفظ Parakeet المحلي بالنسخ المحلي. يرسل Deepgram الصوت إلى Deepgram للنسخ. يعد تحليل الذكاء الاصطناعي خيارًا منفصلاً وقد يرسل نصًا نصيًا أو سياقًا مشتقًا من لقطة الشاشة إلى موفر LLM الذي حددته.

## متعلق ب

- [تكوين إعدادات الصوت ExtraBrain](/ar/help/settings/audio-settings/)
- [تنظيف النصوص وكلمات الحشو](/ar/help/settings/transcript-cleanup-filler-words/)
- [استخدام عبارات التشغيل الصوتي](/ar/help/settings/voice-trigger/)
- [كيف يتعامل ExtraBrain مع البيانات](/ar/help/privacy-security/how-extrabrain-handles-data/)

## أسئلة النسخ

### ما هو مزود النسخ الأفضل للخصوصية؟

يعد Parakeet المحلي هو الخيار الافتراضي الأفضل عندما يجب أن يظل الصوت على Mac. لا يتطلب مفتاح Deepgram API.

### متى يجب أن أختار Deepgram؟

اختر Deepgram عندما يناسب النسخ السحابي الجلسة، أو تستخدم مؤسستك بالفعل Deepgram، أو إذا كنت تفضل النسخ المُدار وتقبل إرسال الصوت إلى Deepgram.
