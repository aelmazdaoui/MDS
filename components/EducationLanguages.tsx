import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, Languages } from 'lucide-react';

const EducationLanguages: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8}>
        <SectionHeader title="Formation Académique" subtitle="Education" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {EDUCATION.map((edu, index) => (
            <Paper 
              key={index} 
              elevation={0}
              sx={{ 
                p: 3, 
                display: 'flex', 
                gap: 2, 
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                transition: 'border-color 0.3s',
                '&:hover': { borderColor: 'text.secondary' }
              }}
            >
              <Box 
                sx={{ 
                  display: { xs: 'none', sm: 'flex' }, 
                  width: 48, 
                  height: 48, 
                  borderRadius: '50%', 
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(33, 150, 243, 0.1)' : 'rgba(33, 150, 243, 0.1)',
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'primary.main',
                  flexShrink: 0
                }}
              >
                <GraduationCap size={24} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{edu.degree}</Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>{edu.school}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {edu.period} • {edu.location}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} lg={4}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="subtitle2" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 'bold', mb: 1 }}>
            International
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Langues
          </Typography>
          <Box sx={{ width: 80, height: 4, backgroundColor: 'primary.main', borderRadius: 2 }} />
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            p: 3, 
            bgcolor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            borderRadius: 2
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {LANGUAGES.map((lang, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  pb: index !== LANGUAGES.length - 1 ? 2 : 0,
                  borderBottom: index !== LANGUAGES.length - 1 ? 1 : 0,
                  borderColor: 'divider'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Languages size={20} color={theme.palette.primary.main} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{lang.language}</Typography>
                </Box>
                <Box 
                  sx={{ 
                    px: 1.5, 
                    py: 0.5, 
                    borderRadius: 10, 
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(33, 150, 243, 0.1)' : 'rgba(33, 150, 243, 0.1)',
                    color: 'primary.main',
                    fontSize: '0.875rem'
                  }}
                >
                  {lang.level}
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EducationLanguages;