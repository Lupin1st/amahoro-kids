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

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <div className="w-full flex flex-col items-center space-y-5">
        <div className="w-full">
          <Carousel
            height={500}
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
              <div className='w-full'>
                <img src="/sliders/project_1.jpg" style={{ marginLeft: "auto", marginRight: "auto" }} />
              </div>

              <div className='absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1>Organic farm</h1>
                <p>Information about organic farm</p>
              </div>
              <div className='absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  startIcon={<AgricultureIcon/>}
                >
                  {t('DiscoverMore')}
                </Button>
              </div>
            </div>
            <div>
              <div className='w-full'>
                <img src="/sliders/project_3.jpg" style={{ marginLeft: "auto", marginRight: "auto" }} />
              </div>
              <div className='absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1>Amahoro Children</h1>
                <p>Partner children program</p>
              </div>
              <div className='absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
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
              <div className='w-full'>
                <img src="/sliders/project_5.jpg" style={{ marginLeft: "auto", marginRight: "auto" }} />
              </div>
              <div className='absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1>Label image 5</h1>
                <p>Information about this slide 5</p>
              </div>
              <div className='absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <Button
                  component={Link}
                  href="/about"
                  variant="contained"
                  startIcon={<GroupIcon/>}
                >
                  {t('AboutUs')}
                </Button>
            </div>
            </div>
          </Carousel>
        </div>

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
