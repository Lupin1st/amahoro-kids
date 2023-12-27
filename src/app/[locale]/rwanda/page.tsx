'use client';

import Fact from '@/components/Fact/Fact';
import MainHeader from '@/components/Layout/Headers/MainHeader';
import SectionHeader from '@/components/Layout/Headers/SectionHeader';
import CenterPage from '@/components/Layout/PageLayout/CenterPage';
import Section from '@/components/Layout/Section/Section';
import List from '@/components/Layout/TextViewStyle/List';

import { useTranslations, useFormatter } from 'next-intl';

export default function RwandaPage() {
  const t = useTranslations('RwandaPage');
  const format = useFormatter();
  const listItems = [t('Fact_1'), t('Fact_2'), t('Fact_3'), t('Fact_4')];

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
        <div className="w-full flex flex-row items-center">
          <div>
          <h1 className="w-full flex flex-row items-center" style={{ fontWeight: 'bold' }}><p>{t('FactsLabel')}</p></h1>
            <List items={listItems} />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader title={t('History')} />
        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}>{t('BeforeColonialLabel')}</h1>
          <p>{t('BeforeColonialText')}</p>
        </div>
        <div className="w-full flex flex-row items-center top" style={{ marginTop: '10px' }}>
          <h1 className="w-full flex flex-row items-center" style={{ fontWeight: 'bold' }}><p>{t('GenocideLabel')}</p></h1>
        </div>

        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}>{t('GenocideLabel_1')}</h1>
          <p>{t('GenocideText_1')}</p>
        </div>
        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}>{t('GenocideLabel_2')}</h1>
          <p>{t('GenocideText_2')}</p>
        </div>
        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}>{t('GenocideLabel_3')}</h1>
          <p>{t('GenocideText_3')}</p>
        </div>
        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}><p>{t('GenocideLabel_4')}</p></h1>
          <p>{t('GenocideText_4')}</p>
        </div>
        <div className="w-full items-center top" style={{ marginTop: '10px' }}>
          <h1 style={{ fontWeight: 'bold' }}>{t('GenocideLabel_5')}</h1>
          <p>{t('GenocideText_5')}</p>
        </div>
        <p>[<a href="https://www.un.org/en/preventgenocide/rwanda/historical-background.shtml" target="_blank" rel="noopener noreferrer">un.org</a>]</p>
        <p>[<a href="https://www.hmd.org.uk/learn-about-the-holocaust-and-genocides/rwanda/100-days-the-genocide/" target="_blank" rel="noopener noreferrer">hmd.org.uk</a>]</p>

      </Section>
      <Section>
        <SectionHeader title={t('Safety')} />
      </Section>
    </CenterPage>
  );
}
