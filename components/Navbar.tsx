
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  ListItemButton,
  Chip
} from '@mui/material';
import { Menu, X, Sun, Moon, Languages, UserCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../constants';
import ClientHub from './ClientHub';

interface NavbarProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clientHubOpen, setClientHubOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.process, href: '#process' }, 
    { name: t.whyUs, href: '#why-us' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        color="inherit" 
        elevation={trigger ? 4 : 0}
        sx={{ 
          backgroundColor: mode === 'dark' ? 'rgba(10, 25, 41, 0.85)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 900, letterSpacing: 0.5 }}>
            MDS<span style={{ color: mode === 'dark' ? '#3399ff' : '#0059b2' }}>.</span> (Mazdaoui Digital)
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navLinks.map((link) => (
              <Button 
                key={link.name} 
                href={link.href} 
                color="inherit"
                sx={{ 
                  '&:hover': { color: 'primary.main', backgroundColor: 'transparent' } 
                }}
              >
                {link.name}
              </Button>
            ))}
            
            <Box sx={{ width: 1, height: 24, bgcolor: 'divider', mx: 1 }} />
            
            <Button 
              variant="outlined" 
              color="primary" 
              size="small"
              startIcon={<UserCircle size={18} />}
              onClick={() => setClientHubOpen(true)}
              sx={{ borderRadius: 50, px: 2 }}
            >
              {t.clientArea}
            </Button>

            <Button 
              onClick={toggleLanguage} 
              color="inherit" 
              startIcon={<Languages size={18} />}
              sx={{ minWidth: 80 }}
            >
              {language.toUpperCase()}
            </Button>

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Box>

          {/* Mobile Nav Toggle */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton onClick={() => setClientHubOpen(true)} color="primary">
               <UserCircle size={24} />
            </IconButton>
            <Button onClick={toggleLanguage} color="inherit" size="small" sx={{ minWidth: 'auto' }}>
              {language.toUpperCase()}
            </Button>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
        PaperProps={{ sx: { width: '100%', backgroundColor: 'background.default' } }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={handleDrawerToggle}>
                <ListItemText primary={link.name} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <ClientHub open={clientHubOpen} onClose={() => setClientHubOpen(false)} />
    </>
  );
};

export default Navbar;
