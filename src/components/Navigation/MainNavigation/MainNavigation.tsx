'use client';

import './styles.css';
import { useState, useTransition } from 'react';
import { useRouter } from 'next-intl/client';
import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';
import Logo from './Logo';
import { getNavigationLinks } from '../utils/menu';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

export function MainNavigation() {
  const t = useTranslations('Navigation');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const menuItems = getNavigationLinks();

  const [anchorElementNavigation, setAnchorElementNavigation] = useState<null | HTMLElement>(null);

  const handleOpenNavigationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElementNavigation(event.currentTarget);
  };
  const handleCloseNavigationMenu = () => {
    setAnchorElementNavigation(null);
  };

  const navigateToPage = (link: string) => {
    handleCloseNavigationMenu();
    startTransition(() => {
      router.push(link);
    });
  };

  return (
    <header className="header sticky top-0 w-full flex flex-row justify-center py-2 px-8 bg-neutral-50">
      <div className="flex flex-row justify-center items-center w-full max-w-7xl">
        <div className="flex justify-start items-center w-1/4 grow">
          <Logo />
        </div>

        <div className="xl:flex hidden w-2/4 flex-row space-x-5 justify-center items-center">
          {menuItems.map((item) => (
            <Link
              className="text-lg uppercase font-medium hover:text-sky-600"
              key={item.title}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
          <Button
            component={Link}
            href="/help"
            variant="contained"
            startIcon={<VolunteerActivismIcon />}
          >
            {t('HelpNow')}
          </Button>
        </div>

        <div className="w-1/4 flex justify-end">
          <div className="xl:hidden flex ">
            <Button
              sx={{ p: 0 }}
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavigationMenu}
              color="inherit"
            >
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElementNavigation}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElementNavigation)}
              onClose={handleCloseNavigationMenu}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.title} onClick={() => navigateToPage(item.link)}>
                  {item.title}
                </MenuItem>
              ))}
              <Divider />
              <MenuItem key={t('HelpNow')} onClick={() => navigateToPage('/help')}>
                <ListItemIcon>
                  <VolunteerActivismIcon className="text-sky-600" />
                </ListItemIcon>

                <ListItemText>
                  <div className="text-sky-600">{t('HelpNow')}</div>
                </ListItemText>
              </MenuItem>
            </Menu>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
