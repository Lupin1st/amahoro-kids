'use client';

import { getNavigationLinks } from '../utils/menu';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

export function FooterNavigation() {
  const t = useTranslations('Navigation');
  const menuItems = getNavigationLinks();

  return (
    <div className="lg:w-1/4 lg:pt-0 pt-5 w-full flex flex-col items-center">
      <h4 className="text-2xl pb-2">{t('Links')}</h4>

      {menuItems.map((item) => (
        <Link key={item.title} className="hover:font-bold" href={{ pathname: item.link }}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
