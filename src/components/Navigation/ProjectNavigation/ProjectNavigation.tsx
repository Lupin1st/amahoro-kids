'use client';

import { getNavigationLinks } from '../utils/menu';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

export function ProjectNavigation() {
  const t = useTranslations('Projects');
  const menuItems = getNavigationLinks();

  return (
    <div className="lg:w-1/4 lg:pt-0 pt-5 w-full flex flex-col items-center">
      <h4 className="text-2xl pb-2">{t('Projects')}</h4>
      <Link className="hover:font-bold" href={{ pathname: './projects' }}>
        Schule
      </Link>
      <Link className="hover:font-bold" href={{ pathname: './projects' }}>
        Organic Farm
      </Link>
      <Link className="hover:font-bold" href={{ pathname: './projects' }}>
        Atelier
      </Link>
    </div>
  );
}
