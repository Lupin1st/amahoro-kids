'use client';

import { useTranslations } from 'next-intl';
import HomeIntro from "@/components/Sections/HomeIntro";


export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
  <>
      <HomeIntro />
  </>
);
}
