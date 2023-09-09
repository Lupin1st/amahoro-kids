import Buttons from '@/components/Buttons';
import { useTranslations } from "next-intl";

const HomeSectionCurrentProjects = () => {
    const t = useTranslations('HomeSectionCurrentProjects');
    return (
        <div className="homeSectionCurrentProjectMainContainer">
            <div className="homeFlexContainer">
                <div className="w-full px-4 lg:w-4/12">
                    <Buttons
                        url="buttons/photo_girls.jpg"
                        title={t('button_current_projects')}
                        width="100%"></Buttons>
                </div>

            </div>

            <div className="homeFlexContainer">
                <div className="homeIntroContainer">
                    <div className="homeIntroBox">
                        <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-white dark:border-white dark:border-opacity-10 dark:text-white">
                            {t('title')}
                        </h3>
                        <p>
                            {t('description')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionCurrentProjects;