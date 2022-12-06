import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Link,
  Drawer,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from '../shared';
import { useState } from 'react';
import { Logo } from '../assets/imges';
import CV from '../assets/documents/CV.pdf';

export const navItems: { item: string; href: ''; target: string }[] = [
  { item: 'HOME', href: '', target: '' },
  { item: 'EXPERIENCES', href: '', target: '' },
  { item: 'ABOUT', href: '', target: '' },
  { item: 'PORTFOLIO', href: '', target: '' },
  { item: 'Resume', href: CV, target: '_blank' },
];
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
export const Navbar = (props: Props) => {
  const { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerData = (
    <Grid onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid
        item
        py={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          component='img'
          src={Logo}
          alt='logo'
          sx={{
            width: '50px',
            height: '60px',
          }}
        ></Image>
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          pt: 3,
        }}
        gap={4}
      >
        {navItems.map(({ item, href }, index) => (
          <Link
            key={index}
            underline='none'
            href={`#${href ? href : item}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'info.main',
              fontWeight: '700',
              fontSize: '15px',
              textAlign: 'center',
            }}
          >
            {item}
          </Link>
        ))}
      </Grid>
    </Grid>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Grid container my={'0 !important'}>
      <AppBar component='nav' sx={{ p: 2, boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            item
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
            gap={3}
          >
            <Grid item display={{ xs: 'none', sm: 'block' }}>
              <Image
                width='50px'
                height='50px'
                component='img'
                src={Logo}
                alt='logo'
              ></Image>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} gap={2}>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {navItems.map(({ item, href, target }, index) => (
                  <Link
                    key={`nav-item${index}`}
                    href={href ? href : `#${item}`}
                    target={target}
                    underline='none'
                    sx={{
                      color: 'info.main',
                      fontWeight: '800',
                      fontSize: { sm: '10px', md: '.8rem' },
                      p: 1,
                      '&:last-child': {
                        border: '1px solid #4DB5FF',
                        borderRadius: '5px',
                        color: '#4DB5FF',
                        transition: 'all 0.5',
                        ml: 1,
                        '&:hover': {
                          backgroundColor: 'secondary.main',
                          color: 'info.main',
                        },
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid item component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawerData}
        </Drawer>
      </Grid>
    </Grid>
  );
};
