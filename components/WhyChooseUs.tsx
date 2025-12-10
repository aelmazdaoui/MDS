import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, STATS } from '../constants';
import { Clock, CheckCircle, Heart, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={40} />,
  CheckCircle: <CheckCircle size={40} />,
  Heart: <Heart size={40} />,
  Headphones: <Headphones size={40} />
};

const WhyChooseUs: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].whyUs;
  const stats = STATS[language];

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, lineHeight: 1.6 }}>
            {t.description}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
             Mazdaoui Digital Services stands out by bridging the gap between theoretical knowledge and practical application. Whether it's complex embedded systems, rapid prototyping, or full-stack development, we deliver industrial-grade quality at competitive rates.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 3,
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-5px)', borderColor: 'primary.main' }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {iconMap[stat.icon]}
                  </Box>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 800, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
