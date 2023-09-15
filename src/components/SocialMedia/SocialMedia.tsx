'use client';

import { Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function SocialMedia() {
  const t = useTranslations('SocialMedia');

  return (
    <div className="flex flex-row space-x-2 justify-center pt-5">
      <Link href="https://www.facebook.com/amahorokids/" target="_blank" rel="noopener noreferrer">
        <Tooltip title={t('Facebook')} placement="top">
          <FacebookIcon fontSize="medium" titleAccess={t('Facebook')} />
        </Tooltip>
      </Link>

      <Link
        href="https://www.instagram.com/amahoro_kids/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tooltip title={t('Instagram')} placement="top">
          <InstagramIcon fontSize="medium" titleAccess={t('Instagram')} />
        </Tooltip>
      </Link>
    </div>
  );
}
