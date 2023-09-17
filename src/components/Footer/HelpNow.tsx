'use client';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { Button } from '@mui/material';

export default function HelpNow() {
  const t = useTranslations('HelpNow');

  return (
    <div className="lg:w-1/4 w-full ">
      <div className="flex flex-col justify-center items-center pb-2">
        <div className="flex flex-row justify-center items-center pb-5">
          <img className="w-20 h-20" src="/logos/amahoro_kids_logo_round.png" />
          <div className="flex flex-col pl-2">
            <h4 className="text-2xl">Amahoro Kids</h4>
            <span className=" text-lg">{t('HelpForChildrenInRwanda')}</span>
          </div>
        </div>
        <Button component={Link} href="/help" variant="contained" size="large">
          {t('HelpNowButtonText')}
        </Button>
      </div>
    </div>
  );
}
