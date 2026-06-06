import { buildLlmsText } from '../../data/llms';
import { isLocale, prefixedLocaleCodes, type PrefixedLocale } from '../../i18n/locales';

export function getStaticPaths() {
  return prefixedLocaleCodes.map((locale) => ({
    params: { locale },
  }));
}

export function GET({ params }: { params: { locale?: string } }) {
  const locale: PrefixedLocale = isLocale(params.locale) && params.locale !== 'en' ? params.locale : 'es';

  return new Response(buildLlmsText(locale), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
