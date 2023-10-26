'use client';

import Fact from '@/components/Fact/Fact';
import MainHeader from '@/components/Layout/Headers/MainHeader';
import SectionHeader from '@/components/Layout/Headers/SectionHeader';
import CenterPage from '@/components/Layout/PageLayout/CenterPage';
import Section from '@/components/Layout/Section/Section';
import { useTranslations, useFormatter } from 'next-intl';

export default function RwandaPage() {
  const t = useTranslations('RwandaPage');
  const format = useFormatter();

  return (
    <CenterPage>
      <Section>
        <MainHeader>{t('RwandaTitle')}</MainHeader>
        <div className="w-full flex flex-row items-center">
          <img className="w-2/4" src="/rwanda/africa_rwanda.png" />
          <div className="w-full flex flex-col items-center space-y-4">
            <Fact value={`~ ${format.number(26.3)} km²`} description={t('Area')} />
            <Fact
              value={`~ ${format.number(13.3)} ${t('MillionsShort')}`}
              description={t('Population')}
            />
            <Fact value={`> ${format.number(60)} %`} description={t('BelowPovertyLine')} />
            <Fact value={`${format.number(50)} %`} description={t('YoungerThan20')} />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader title={t('InteresstingFacts')} />
      </Section>
    </CenterPage>
  );
}
