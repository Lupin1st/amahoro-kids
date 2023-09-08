'use client';

import { useTranslations } from 'next-intl';
import ImgMediaCard from '@/components/ImgMediaCard';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
  <div className="main_page">

<h1>Amahoro (a-ma-ho-ro): Peace</h1>
<p>Amahoro - means peace in Rwanda's native language. “N'amahoro” is a common greeting and response in Rwanda. You may greet someone by saying: “Amahoro!” Meaning simply, peace.</p>

</div>
<ImgMediaCard />

    </>
  );
}
