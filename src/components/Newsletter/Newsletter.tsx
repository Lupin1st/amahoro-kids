'use client';

import { Button, TextField } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('Newsletter');

  return (
    <div className="w-full flex flex-col items-center">
      <h4 className="text-2xl pb-2">{t('Newsletter')}</h4>
      <label className="font-bold">{t('SignUpForNewsletter')}</label>
      <div className="flex flex-row space-x-2">
        <TextField
          id="newsletter"
          variant="outlined"
          aria-label="newsletter"
          size="small"
          fullWidth
          placeholder={t('EmailPlaceholder')}
        />
        <Button variant="contained">{t('Subscribe')}</Button>
      </div>
    </div>
  );
}
