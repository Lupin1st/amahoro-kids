'use client';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslations } from 'next-intl';
import HomeIntro from '@/components/Sections/HomeIntro';
import HomeBlocks from '@/components/Sections/HomeBlocks';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import Link from 'next-intl/link';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupIcon from '@mui/icons-material/Group';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/Headers/SectionHeader';
import SubSectionHeader from '@/components/Headers/SubSectionHeader';

export default function IndexPage() {
  const t = useTranslations('MainPage');

  return (
    <div className="w-full flex flex-col items-center pb-12">
      <Carousel
        className="w-full"
        height={400}
        fullHeightHover={true}
        animation="fade"
        interval={7000}
        duration={2000}
        navButtonsAlwaysVisible={true}
        indicators={true}
        sx={{
          backgroundColor: 'rgba(33, 123, 179, 0.1)',
        }}
      >
        <div>
          {/*<TODO>Create template for this</TODO> */}

          {/*<TODO>Mobile view </TODO> */}
          <div className="w-full">
            <img
              src="/projects/project_1.jpg"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>

          <div className="absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1>Organic farm</h1>
            <p>Information about organic farm</p>
          </div>
          <div className="absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              startIcon={<AgricultureIcon />}
            >
              {t('LearnMore')}
            </Button>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img
              src="/projects/project_3.jpg"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className="absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1>Amahoro Children</h1>
            <p>Partner children program</p>
          </div>
          <div className="absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Button
              component={Link}
              href="/help"
              variant="contained"
              startIcon={<VolunteerActivismIcon />}
            >
              {t('HelpNow')}
            </Button>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img
              src="/projects/project_5.jpg"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className="absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1>Label image 5</h1>
            <p>Information about this slide 5</p>
          </div>
          <div className="absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Button component={Link} href="/about" variant="contained" startIcon={<GroupIcon />}>
              {t('AboutUs')}
            </Button>
          </div>
        </div>
      </Carousel>

      <div className="max-w-7xl flex flex-col items-center space-y-12 p-8">
        <Section>
          <img className="pb-5" src="/logos/logo_text.png" />
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
      </div>

      <HomeBlocks />
    </div>
  );
}
