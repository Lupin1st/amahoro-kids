import YouTubePlayer from '@/components/YouTube/YouTubePlayer';
import './styles.css';

import { useTranslations } from 'next-intl';
import { YouTubeProps } from 'react-youtube';

const HomeIntro = () => {
  const t = useTranslations('HomeIntro');

  const youtubeOptions: YouTubeProps['opts'] = {
    opts: {
      width: '520',
      height: '295',
      playerVars: {
        autoplay: 0, // Change to 1 for autoplay
        controls: 1, // Show video controls
        rel: 1, // Hide related videos at the end
        modestbranding: 1, // Hide YouTube logo
      },
    },
  };

  return (
    <div className="mainContainer">
      <div>
        <img
          src="/logos/amahoro_kids_logo_round.png"
          alt="logo"
          className="sectionLogo"
          width="250px"
        />
        <div className="titleContainer">
          <h1>{t('title')}</h1>
          <h1>{t('title_2')}</h1>
        </div>
      </div>
      <div className="flexContainer">
        <div className="introContainer">
          <div className="introBox">
            <p>{t('description')}</p>
          </div>
        </div>
        <div className="videoContainer">
          <YouTubePlayer videoId="vZmoK0QGD0A" opts={youtubeOptions}></YouTubePlayer>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
