import React from 'react';
import { Box, Typography, Paper, Chip, useTheme, Grid } from '@mui/material';
import SectionHeader from './SectionHeader';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionHeader title="Our Corporate Track Record" subtitle="Expertise" />
      
      <Box sx={{ position: 'relative', borderLeft: `2px solid ${theme.palette.divider}`, ml: { xs: 2, md: 3 }, pl: { xs: 4, md: 6 }, py: 1 }}>
        {EXPERIENCES.map((exp, index) => (
          <Box key={index} sx={{ mb: 8, position: 'relative', '&:last-child': { mb: 0 } }}>
            {/* Timeline Dot */}
            <Box 
              sx={{ 
                position: 'absolute', 
                left: { xs: -41, md: -57 }, 
                top: 0, 
                width: 16, 
                height: 16, 
                borderRadius: '50%', 
                bgcolor: 'primary.main',
                border: `4px solid ${theme.palette.background.default}`
              }} 
            />

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  {exp.role}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                  {exp.company}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
                  <Calendar size={14} /> {exp.period}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1, mt: 0.5 }}>
                  <MapPin size={14} /> {exp.location}
                </Typography>
              </Grid>
            </Grid>

            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                border: 1, 
                borderColor: 'divider', 
                bgcolor: 'background.paper',
                borderRadius: 2,
                transition: 'all 0.3s',
                '&:hover': { borderColor: 'primary.main', boxShadow: theme.shadows[4] }
              }}
            >
              <Box component="ul" sx={{ pl: 2, m: 0, color: 'text.secondary', mb: 3 }}>
                {exp.details.map((detail, idx) => (
                  <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                    {detail}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exp.tools.map((tool, idx) => (
                  <Chip 
                    key={idx} 
                    label={tool} 
                    size="small" 
                    sx={{ 
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(51, 153, 255, 0.1)' : 'rgba(0, 89, 178, 0.1)',
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      fontWeight: 500
                    }} 
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;