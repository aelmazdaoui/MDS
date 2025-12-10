import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, useTheme, Fade } from '@mui/material';
import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, QUOTE_SERVICES, QUOTE_COMPLEXITY } from '../constants';
import { Calculator, CheckCircle2 } from 'lucide-react';

const QuoteCalculator: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].quote;
  const complexityOptions = QUOTE_COMPLEXITY[language];

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  const calculateEstimate = () => {
    if (!selectedService || !selectedComplexity) return 0;
    
    const service = QUOTE_SERVICES.find(s => s.id === selectedService);
    const complexity = complexityOptions.find(c => c.id === selectedComplexity);

    if (!service || !complexity) return 0;

    // Formula: Rate * Hours + Base Overhead (fixed 200)
    return (service.baseRate * complexity.hoursMultiplier) + 200;
  };

  const estimate = calculateEstimate();

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 5 }, 
          bgcolor: 'background.paper', 
          border: 1, 
          borderColor: 'divider',
          borderRadius: 3
        }}
      >
        <Grid container spacing={6}>
          {/* Controls */}
          <Grid item xs={12} md={7}>
            {/* Step 1: Services */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>1</Box>
              {t.selectService}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {QUOTE_SERVICES.map((service) => (
                <Grid item xs={6} sm={4} key={service.id}>
                  <Button
                    fullWidth
                    variant={selectedService === service.id ? "contained" : "outlined"}
                    onClick={() => setSelectedService(service.id)}
                    sx={{ 
                      height: '100%', 
                      py: 1.5,
                      borderColor: selectedService === service.id ? 'primary.main' : 'divider',
                      color: selectedService === service.id ? 'white' : 'text.primary',
                      bgcolor: selectedService === service.id ? 'primary.main' : 'transparent'
                    }}
                  >
                    {service.label}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {/* Step 2: Complexity */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>2</Box>
              {t.selectComplexity}
            </Typography>
            <Grid container spacing={2}>
              {complexityOptions.map((opt) => (
                <Grid item xs={12} sm={4} key={opt.id}>
                   <Button
                    fullWidth
                    variant={selectedComplexity === opt.id ? "contained" : "outlined"}
                    onClick={() => setSelectedComplexity(opt.id)}
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      py: 2,
                      borderColor: selectedComplexity === opt.id ? 'primary.main' : 'divider',
                      color: selectedComplexity === opt.id ? 'white' : 'text.primary',
                      bgcolor: selectedComplexity === opt.id ? 'primary.main' : 'transparent'
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{opt.label}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>{opt.desc}</Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Result */}
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                height: '100%', 
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(51, 153, 255, 0.08)' : 'rgba(0, 89, 178, 0.05)',
                borderRadius: 2,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: 1,
                borderColor: 'divider'
              }}
            >
              <Calculator size={48} color={theme.palette.primary.main} style={{ marginBottom: 16 }} />
              
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {t.estimatedCost}
              </Typography>
              
              <Typography variant="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                {estimate > 0 ? `${estimate.toLocaleString()} ${t.currency}` : `-- ${t.currency}`}
              </Typography>
              
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3, fontStyle: 'italic' }}>
                {t.disclaimer}
              </Typography>

              <Button 
                variant="contained" 
                size="large" 
                href="#contact"
                disabled={estimate === 0}
                endIcon={<CheckCircle2 size={18} />}
                fullWidth
              >
                {t.cta}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default QuoteCalculator;