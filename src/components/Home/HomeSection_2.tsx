import Image from "next/image";
import Buttons from '@/components/Buttons';

const HomeSection_2 = () => {
    return (
        <section className="py-16 md:py-20 lg:py-10">
            <div className="main_page">
            <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
            Amahoro - means simply, peace in Rwanda's native language.
                    </h3>
            <div className="w-full px-4 lg:w-4/12">

                <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                 
                    <ul className="p-8">
                        <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">

                            <Buttons
                                url="/buttons/photo_girls.jpg"
                                title="Project 1."
                                width="100%"></Buttons>
                        </li>
                        <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">

                            <Buttons
                                url="/buttons/photo_girls.jpg"
                                title="Project 1."
                                width="100%"></Buttons>
                        </li>
                        <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">

                            <Buttons
                                url="/buttons/photo_girls.jpg"
                                title="Project 1."
                                width="100%"></Buttons>
                        </li>

                    </ul>
                </div>
            </div>

            </div>
        </section>
    );
};

export default HomeSection_2;