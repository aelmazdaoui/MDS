import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="subtitle2" 
        color="primary" 
        sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 'bold', mb: 1 }}
      >
        {subtitle}
      </Typography>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        {title.split(' ').map((word, i) => (
          <span key={i} style={{ color: i % 2 !== 0 ? 'var(--mui-palette-primary-main)' : 'inherit' }}>
            {word}{' '}
          </span>
        ))}
      </Typography>
      <Box sx={{ width: 80, height: 4, backgroundColor: 'primary.main', borderRadius: 2 }} />
    </Box>
  );
};

export default SectionHeader;