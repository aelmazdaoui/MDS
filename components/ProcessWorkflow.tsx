import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, PROCESS_STEPS } from '../constants';
import { Search, PenTool, Code, CheckSquare, Rocket } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={28} />,
  PenTool: <PenTool size={28} />,
  Code: <Code size={28} />,
  CheckSquare: <CheckSquare size={28} />,
  Rocket: <Rocket size={28} />
};

const ProcessWorkflow: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].process;
  const steps = PROCESS_STEPS[language];

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Box sx={{ position: 'relative', mt: 4 }}>
        {/* Connection Line (Desktop) */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'absolute', 
            top: 40, 
            left: '5%', 
            right: '5%', 
            height: 2, 
            bgcolor: 'divider',
            zIndex: 0 
          }} 
        />

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={2.4} key={index} sx={{ position: 'relative', zIndex: 1 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center' 
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    bgcolor: 'background.paper',
                    border: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    boxShadow: theme.shadows[4]
                  }}
                >
                  {iconMap[step.icon]}
                </Paper>
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {step.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>

                {/* Number Indicator */}
                <Box 
                  sx={{ 
                    mt: 2, 
                    fontWeight: 900, 
                    color: 'text.disabled', 
                    fontSize: '2rem', 
                    opacity: 0.1 
                  }}
                >
                  0{index + 1}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProcessWorkflow;