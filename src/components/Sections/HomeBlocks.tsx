import Block from '@/components/Block/Block';

import { useTranslations } from "next-intl";

const HomeBlocks = () => {
    const t = useTranslations('HomeBlocks');
    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h1>
                    {t('title')}
                </h1>
            </div>
            <div className="flexContainer">
                <div className="w-full px-4 lg:w-3/9">
                    <Block title={t('button_community')}
                        paragraph={t('community_paragraph')}
                        image="/labels/photo_2.jpg"
                        link="/community"
                    ></Block>
                </div>
                <div className="w-full px-4 lg:w-3/9">
                    <Block title={t('button_school')}
                        paragraph={t('school_paragraph')}
                        image="/labels/photo_4.jpg"
                        link="/about"
                    ></Block>
                </div>
                <div className="w-full px-4 lg:w-3/9">
                    <Block
                        title={t('button_current_projects')}
                        paragraph={t('current_projects_paragraph')}
                        image="/labels/photo_3.jpg"
                        link="/projects"
                    ></Block>
                </div>
            </div>
        </div>
    );
};

export default HomeBlocks;