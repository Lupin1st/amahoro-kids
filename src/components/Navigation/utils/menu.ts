import { useTranslations } from 'next-intl';

export interface MenuItem {
  link: string;
  title: string;
}

export function getNavigationLinks(): MenuItem[] {
  const t = useTranslations('Navigation');

  const MENU_ITEMS: MenuItem[] = [
    {
      link: '/',
      title: t('Home'),
    },
    {
      link: '/rwanda',
      title: t('Rwanda'),
    },
    {
      link: '/projects',
      title: t('Projects'),
    },
    {
      link: '/about',
      title: t('About'),
    },
    {
      link: '/community',
      title: t('Community'),
    },
  ];

  return MENU_ITEMS;
}
