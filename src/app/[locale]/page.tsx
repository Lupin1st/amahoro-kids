'use client';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslations } from 'next-intl';
import HomeBlocks from '@/components/Sections/HomeBlocks';
import Section from '@/components/Layout/Section/Section';
import SectionHeader from '@/components/Layout/Headers/SectionHeader';
import MainSlider from '@/components/MainSlider/MainSlider';
import CenterPage from '@/components/Layout/PageLayout/CenterPage';

export default function IndexPage() {
  const t = useTranslations('MainPage');

  return (
    <div className="w-full flex flex-col items-center pb-12">
      <MainSlider></MainSlider>

      <CenterPage>
        <Section>
          <img className="pb-5" src="./logos/logo_text.png" />
          <SectionHeader title={t('MissionTitle')} subtitle={t('MissionSubtitle')} />
          <p>{t('MissionDescription')}</p>
        </Section>

        <Section>
          <SectionHeader title={t('RwandaTitle')} subtitle={t('RwandaSubtitle')} />
          <div className="flex flex-row flex-wrap items-center justify-center">
            <ProjectCard
              image="/projects/photo_4.jpg"
              imageTitle="AmahorokisSchool"
              title="School"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
            <ProjectCard
              image="/projects/photo_3.jpg"
              imageTitle="AmahorokisOrganicFarm"
              title="Orgaic Farm"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
            <ProjectCard
              image="/projects/photo_2.jpg"
              imageTitle="AmahorokisOrganicFarm"
              title="Atelier"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
          </div>
        </Section>

        <Section>
          <SectionHeader title={t('ProjectsTitle')} subtitle={t('ProjectsSubtitle')} />
          <div className="flex flex-row flex-wrap items-center justify-center">
            <ProjectCard
              image="/projects/photo_4.jpg"
              imageTitle="AmahorokisSchool"
              title="School"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
            <ProjectCard
              image="/projects/photo_3.jpg"
              imageTitle="AmahorokisOrganicFarm"
              title="Orgaic Farm"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
            <ProjectCard
              image="/projects/photo_2.jpg"
              imageTitle="AmahorokisOrganicFarm"
              title="Atelier"
              actionLink="/projects"
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </ProjectCard>
          </div>
        </Section>
      </CenterPage>

      <HomeBlocks />
    </div>
  );
}
