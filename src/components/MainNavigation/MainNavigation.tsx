'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next-intl/client';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Logo from './Logo';

type MenuItem = {
  link: string;
  title: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/ruanda',
    title: 'Ruanda',
  },
  {
    link: '/projects',
    title: 'Projekte',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/community',
    title: 'Community',
  },
  {
    link: '/galery',
    title: 'Galery',
  },
];

export function MainNavigation() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {MENU_ITEMS.map((item) => (
              <Button
                key={item.link}
                onClick={() => navigateToPage(item.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.link} onClick={() => navigateToPage(item.link)}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
