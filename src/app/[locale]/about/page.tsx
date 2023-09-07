'use client';

import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    return (
        <div className="max-w-[250px]">
            <h1>{t('title')}</h1>
            <p >{t('description')}</p>
        </div>
    );
}
