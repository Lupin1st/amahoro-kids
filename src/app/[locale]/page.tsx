'use client';

import { useTranslations } from 'next-intl';
import HomeSection_1 from "@/components/Home/HomeSection_1";
import HomeSection_2 from "@/components/Home/HomeSection_2";
export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>

{/*<HomeSection_1 />*/}
      <HomeSection_2 />
    
      <div className="main_page">

        

      </div>
    </>
  );
}
