import createMiddleware from 'next-intl/middleware';
import { supportedLanguages } from '../translations/constants';

export default createMiddleware({
  locales: supportedLanguages,
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
