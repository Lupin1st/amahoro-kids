'use client';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslations } from 'next-intl';
import HomeIntro from '@/components/Sections/HomeIntro';
import HomeBlocks from '@/components/Sections/HomeBlocks';
import Carousel from 'react-material-ui-carousel';

export default function IndexPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-5">
        <HomeIntro />
        <HomeBlocks />
        <Carousel
          className="w-2/3 h-auto"
          animation="slide"
          interval={4000}
          duration={1000}
          navButtonsAlwaysVisible={true}
          indicators={true}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfITYkGz8r79FUOB15EuTLvi60Q_sXm2BQQ&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bU4vByOcPDkDtkHw7FjtE5ktx6oaqscZ1Q&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGrU5wIfn7ddCfUuPL-e-uXXw6IXRt2AYIw&usqp=CAU" />
        </Carousel>

        <h2 className="text-4xl text-center">Current Projects</h2>
        <div className="flex flex-row justify-center space-x-3">
          <ProjectCard
            image="/logos/amahoro_kids_logo_round.png"
            imageTitle="AmahorokisSchool"
            title="School"
            actionLink="/projects"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ProjectCard>
          <ProjectCard
            image="/logos/organic_farm_logo.jpg"
            imageTitle="AmahorokisOrganicFarm"
            title="Orgaic Farm"
            actionLink="/projects"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ProjectCard>
          <ProjectCard
            image="/logos/atelier_logo.png"
            imageTitle="AmahorokisOrganicFarm"
            title="Atelier"
            actionLink="/projects"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </ProjectCard>
        </div>
      </div>
    </>
  );
}
