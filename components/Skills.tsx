import React from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';
import SectionHeader from './SectionHeader';
import { SKILL_CATEGORIES, TRANSLATIONS } from '../constants';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />

      <Grid container spacing={4}>
        {SKILL_CATEGORIES.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                height: '100%',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ width: 4, height: 24, bgcolor: 'primary.main', borderRadius: 4, mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {category.title}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map((skill, idx) => (
                  <Chip 
                    key={idx}
                    label={skill}
                    variant="outlined"
                    sx={{ 
                      borderRadius: 1,
                      border: 1,
                      borderColor: 'divider',
                      '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
