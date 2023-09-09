import Buttons from '@/components/Buttons';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';


const HomeSectionIntro = () => {
    const t = useTranslations('HomeSectionIntro');
    return (
        <div className="homeSectionIntroMainContainer">
            <div className="homeFlexContainer">

                <div className="homeIntroContainer">
                    <div className="homeIntroBox">
                    <img src="/pictures/amahor_kids_logo_round.png" alt="logo" className="homeSectionLogo" />
                        <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-white dark:border-white dark:border-opacity-10 dark:text-white">
                            {t('title')}
                        </h3>
                        <p>
                            {t('description')}
                        </p>
                    </div>

                </div>
                <div >
                    <iframe width="500" height="450" src="https://www.youtube.com/embed/vZmoK0QGD0A" title="AMIS APAX School Janja Rwanda Africa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>
            <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-white dark:border-white dark:border-opacity-10 dark:text-white">
            </h3>

            {/*   <div className="homeFlexContainer">
                <div className="w-full px-4 lg:w-4/12">
                    <Buttons
                        url=""
                        title={t('button_current_projects')}
                        width="100%"></Buttons>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                    <Buttons
                        url=""
                        title={t('button_organization')}
                        width="100%"></Buttons>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                    <Buttons
                        url=""
                        title={t('button_how_to_help')}
                        width="100%"></Buttons>
                </div>
            </div> */}

        </div>

    );
};

export default HomeSectionIntro;