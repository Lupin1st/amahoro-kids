'use client';

import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t.rich('description', {
          code: (chunks) => <code className="font-mono text-white">{chunks}</code>,
        })}
      </p>

      <LanguageSwitcher />
    </PageLayout>
  );
}
