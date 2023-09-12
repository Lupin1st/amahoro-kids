import Buttons from '@/components/Buttons';
import CustomYouTubePlayer from '@/components/YouTube/CustomYoutubePlayer';

import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

const HomeSectionIntro = () => {
    const t = useTranslations('HomeSectionIntro');
    return (
        <div className="homeSectionMainContainer">
            <div className="homeSectionIntro">
                <div className="homeLabelContainer">
                    <img src="/pictures/amahor_kids_logo_round.png" alt="logo" className="homeSectionLogo" width="250px" />
                    <div className="homeTitleContainer">
                        <h1>
                            {t('title')}
                        </h1>
                        <h1>
                            {t('title_2')}
                        </h1>
                    </div>
                </div>
                <div className="homeFlexContainer">
                    <div className="homeIntroContainer">
                        <div className="homeIntroBox">
                            <p>
                                {t('description')}
                            </p>
                        </div>
                    </div>
                    <div className="homeVideoContainer" >
                        <CustomYouTubePlayer> </CustomYouTubePlayer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionIntro;