import Buttons from '@/components/Buttons';
import Section from '@/components/Section/Section';


import { useTranslations } from "next-intl";

const HomeSectionCurrentProjects = () => {
    const t = useTranslations('HomeSectionCurrentProjects');
    return (
        <div className="homeSectionMainContainer">
                <div className="homeSectionProjects">
            <div className="homeFlexContainer">
                <div className="w-full px-4 lg:w-3/9">
                    <Section title={t('button_community')}
                        paragraph={t('community_paragraph')}
                        image="/labels/photo_2.jpg"
                        link="/community"
                    ></Section>
                </div>
                <div className="w-full px-4 lg:w-3/9">
                    <Section title={t('button_school')}
                        paragraph={t('school_paragraph')}
                        image="/labels/photo_4.jpg"
                        link="/about"
                    ></Section>
                </div>
                <div className="w-full px-4 lg:w-3/9">
                    <Section
                        title={t('button_current_projects')}
                        paragraph={t('current_projects_paragraph')}
                        image="/labels/photo_3.jpg"
                        link="/projects"
                    ></Section>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionCurrentProjects;