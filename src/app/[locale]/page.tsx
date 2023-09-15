'use client';

import { useTranslations } from 'next-intl';
import HomeIntro from "@/components/Sections/HomeIntro";
import HomeBlocks from '@/components/Sections/HomeBlocks';


export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <HomeIntro />
      <HomeBlocks />
    </>
  );
}
