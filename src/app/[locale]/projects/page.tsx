'use client';

import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage');

  return (
    <div className="max-w-[250px]">
      <h1>{t('title')}</h1>
      <p >{t('description')}</p>
    </div>
  );
}
