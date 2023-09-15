import CustomYouTubePlayer from '@/components/YouTube/CustomYouTubePlayer';
import './styles.css';

import { useTranslations } from 'next-intl';

const HomeIntro = () => {
    const t = useTranslations('HomeIntro');
    return (
        <div className="mainContainer">
            <div>
                <img src="/logos/amahoro_kids_logo_round.png" alt="logo" className="sectionLogo" width="250px" />
                <div className="titleContainer">
                    <h1>
                        {t('title')}
                    </h1>
                    <h1>
                        {t('title_2')}
                    </h1>
                </div>
            </div>
            <div className="flexContainer">
                <div className="introContainer">
                    <div className="introBox">
                        <p>
                            {t('description')}
                        </p>
                    </div>
                </div>
                <div className="videoContainer" >
                    <CustomYouTubePlayer> </CustomYouTubePlayer>
                </div>
            </div>
        </div>
    );
};

export default HomeIntro;