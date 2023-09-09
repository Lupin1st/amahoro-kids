'use client';

import { useTranslations } from 'next-intl';
import HomeSectionIntro from "@/components/Home/HomeSectionIntro";
import HomeSectionCurrentProjects from "@/components/Home/HomeSectionCurrentProjects";

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <HomeSectionIntro />
      <HomeSectionCurrentProjects />
      
    </>
  );
}
