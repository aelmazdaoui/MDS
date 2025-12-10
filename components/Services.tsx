
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, useTheme, List, ListItem, ListItemIcon, ListItemText, Stack, Chip } from '@mui/material';
import SectionHeader from './SectionHeader';
import { SERVICES_DATA, TRANSLATIONS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Cpu, Wifi, Globe, Activity, Check, ArrowRight, Car, Cloud, Brain, BookOpen, CreditCard, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={32} />,
  Wifi: <Wifi size={32} />,
  Globe: <Globe size={32} />,
  Activity: <Activity size={32} />,
  Car: <Car size={32} />,
  Cloud: <Cloud size={32} />,
  Brain: <Brain size={32} />,
  BookOpen: <BookOpen size={32} />
};

const Services: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].services;
  const services = SERVICES_DATA[language];

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {services.map((service, index) => {
          // Highlight the IoT service (usually index 1)
          const isPopular = index === 1; 

          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%', 
                  bgcolor: 'background.paper', 
                  border: 1, 
                  borderColor: isPopular ? 'primary.main' : 'divider',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 10px 40px rgba(0,0,0,0.5)' : '0 10px 40px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                  }
                }}
              >
                {isPopular && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      right: -32, 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      px: 4, 
                      py: 0.5, 
                      transform: 'rotate(45deg)',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 1,
                      boxShadow: 2
                    }}
                  >
                    {t.popular}
                  </Box>
                )}

                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: 3, 
                      bgcolor: isPopular ? 'primary.main' : (theme.palette.mode === 'dark' ? 'rgba(51, 153, 255, 0.1)' : 'rgba(0, 89, 178, 0.1)'), 
                      color: isPopular ? 'white' : 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    {iconMap[service.icon] || <Cpu size={32} />}
                  </Box>
                  
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: 60 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                     <Typography 
                        variant="h6" 
                        color="primary" 
                        sx={{ fontWeight: 800 }}
                     >
                       {service.price} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'inherit' }}>{t.priceUnit}</span>
                     </Typography>
                     <Typography variant="caption" color="text.secondary">
                       {t.billing}
                     </Typography>
                  </Box>

                  <List sx={{ mb: 3, flexGrow: 1 }}>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
                          <Check size={18} />
                        </ListItemIcon>
                        <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2' }} />
                      </ListItem>
                    ))}
                  </List>

                  <Button 
                    variant={isPopular ? "contained" : "outlined"}
                    fullWidth 
                    href="#contact"
                    endIcon={<ArrowRight size={16} />}
                  >
                    {t.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Payment Trust Footer */}
      <Box sx={{ textAlign: 'center', opacity: 0.7 }}>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
          {t.paymentMethods}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
           <CreditCard size={24} />
           <Typography variant="body2" sx={{ fontWeight: 'bold' }}>VISA</Typography>
           <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Mastercard</Typography>
           <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#003087' }}>PayPal</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Services;
