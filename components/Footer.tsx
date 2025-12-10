import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        bgcolor: 'background.paper', 
        borderTop: 1, 
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
         <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            MDS.
         </Typography>
         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
           Engineering Your Digital Future.
         </Typography>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Mazdaoui Digital Services. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;