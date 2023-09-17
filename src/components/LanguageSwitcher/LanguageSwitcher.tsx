'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useState, useTransition } from 'react';
import { supportedLanguages } from '../../../translations/constants';
import { Button, Menu, MenuItem } from '@mui/material';

export default function LanguageSwitcher() {
  const [anchorElementLanguageSwitcher, setAnchorElementLanguageSwitcher] =
    useState<null | HTMLElement>(null);

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElementLanguageSwitcher(event.currentTarget);
  };
  const handleCloseLanguageMenu = (nextLocale: string) => {
    setAnchorElementLanguageSwitcher(null);
    if (
      supportedLanguages.find((language) => language === nextLocale) &&
      currentLocale !== nextLocale
    ) {
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    }
  };

  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Button
        aria-controls="language-switcher"
        aria-haspopup="true"
        onClick={handleOpenLanguageMenu}
      >
        {currentLocale}
      </Button>
      <Menu
        sx={{ mt: '35px' }}
        id="language-switcher"
        anchorEl={anchorElementLanguageSwitcher}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElementLanguageSwitcher)}
        onClose={handleCloseLanguageMenu}
      >
        {supportedLanguages.map((language) => (
          <MenuItem key={language} onClick={() => handleCloseLanguageMenu(language)}>
            {language.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
