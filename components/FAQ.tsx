import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, FAQ_ITEMS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].faq;
  const items = FAQ_ITEMS[language];

  return (
    <Box>
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {items.map((item, index) => (
          <Accordion 
            key={index} 
            disableGutters
            elevation={0}
            sx={{ 
              mb: 2, 
              border: 1, 
              borderColor: 'divider', 
              borderRadius: '8px !important',
              '&:before': { display: 'none' },
              bgcolor: 'background.paper'
            }}
          >
            <AccordionSummary expandIcon={<ChevronDown />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <HelpCircle size={20} color={theme.palette.primary.main} />
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  {item.question}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" sx={{ pl: 4.5 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;