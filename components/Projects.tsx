import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { useLanguage } from './LanguageContext';
import { FolderGit2, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />

      <Grid container spacing={3}>
        {displayedProjects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              elevation={0}
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                '&:hover': { 
                  transform: 'translateY(-4px)', 
                  borderColor: 'primary.main',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box 
                    sx={{ 
                      p: 1, 
                      borderRadius: 1, 
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(51, 153, 255, 0.1)' : 'rgba(0, 89, 178, 0.1)',
                      color: 'primary.main'
                    }}
                  >
                    <FolderGit2 size={24} />
                  </Box>
                  <Typography variant="caption" sx={{ border: 1, borderColor: 'divider', px: 1, py: 0.5, borderRadius: 1, textTransform: 'uppercase' }}>
                    {project.type}
                  </Typography>
                </Box>

                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1.5 }}>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {project.tech.map((t, i) => (
                    <Typography key={i} variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                      #{t}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="outlined"
          onClick={() => setShowAll(!showAll)}
          endIcon={showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          sx={{ borderRadius: 50, px: 4, py: 1 }}
        >
          {showAll ? t.viewLess : `${t.viewMore} (${PROJECTS.length - 6})`}
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
