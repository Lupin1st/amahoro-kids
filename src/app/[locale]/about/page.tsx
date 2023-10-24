'use client';

import MainHeader from '@/components/Layout/Headers/MainHeader';
import SectionHeader from '@/components/Layout/Headers/SectionHeader';
import CenterPage from '@/components/Layout/PageLayout/CenterPage';
import Section from '@/components/Layout/Section/Section';
import { useTranslations } from 'next-intl';
import TeamSection from './team';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <CenterPage>
      <Section>
        <MainHeader>{t('AboutTitle')}</MainHeader>
      </Section>
      <TeamSection></TeamSection>
    </CenterPage>
  );
}
