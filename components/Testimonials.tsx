import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].testimonials;
  const testimonials = TESTIMONIALS[language];

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Grid container spacing={4}>
        {testimonials.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 4,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ position: 'absolute', top: 24, right: 24, color: 'primary.main', opacity: 0.2 }}>
                <Quote size={48} />
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic', flexGrow: 1, lineHeight: 1.7 }}>
                "{item.content}"
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 48, 
                    height: 48,
                    fontWeight: 'bold'
                  }}
                >
                  {item.avatarLetter}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.role}, {item.company}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
