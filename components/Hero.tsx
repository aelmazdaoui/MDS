import React from 'react';
import { Box, Typography, Button, Stack, useTheme } from '@mui/material';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <Box 
      sx={{ 
        pt: { xs: 10, md: 18 }, 
        pb: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Decorative Corporate Glow */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: -100, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: { xs: '100%', md: 800 }, 
          height: { xs: 400, md: 600 }, 
          background: theme.palette.mode === 'dark' 
            ? 'radial-gradient(circle, rgba(51, 153, 255, 0.12) 0%, rgba(10, 25, 41, 0) 70%)'
            : 'radial-gradient(circle, rgba(0, 89, 178, 0.08) 0%, rgba(240, 244, 248, 0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} 
      />

      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontWeight: 700, 
          letterSpacing: 2, 
          mb: 3, 
          textTransform: 'uppercase',
          color: 'primary.main',
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(51, 153, 255, 0.1)' : 'rgba(0, 89, 178, 0.08)',
          px: 2,
          py: 0.5,
          borderRadius: 2
        }}
      >
        {t.subtitle}
      </Typography>
      
      <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
        {t.title} <br />
        <span style={{ color: theme.palette.primary.main }}>{t.titleHighlight}</span>
      </Typography>
      
      <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mb: 6, fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6 }}>
        {t.description}
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 8 }}>
        <Button 
          variant="contained" 
          size="large" 
          href="#services"
          endIcon={<ArrowRight size={20} />}
          sx={{ px: 4, py: 1.8, fontSize: '1rem' }}
        >
          {t.viewServices}
        </Button>
        <Button 
          variant="outlined" 
          size="large" 
          href="#contact"
          sx={{ px: 4, py: 1.8, fontSize: '1rem' }}
        >
          {t.contactUs}
        </Button>
      </Stack>

      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={{ xs: 2, md: 6 }} 
        sx={{ 
          color: 'text.secondary', 
          fontSize: '0.9rem',
          borderTop: 1,
          borderColor: 'divider',
          pt: 4,
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center' }}>
          <Mail size={18} color={theme.palette.primary.main} />
          contact@mds-engineering.com
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center' }}>
          <Phone size={18} color={theme.palette.primary.main} />
          +33 7 48 90 12 07
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center' }}>
          <MapPin size={18} color={theme.palette.primary.main} />
          Paris, France
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
