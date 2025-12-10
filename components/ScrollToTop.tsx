import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={visible}>
      <Fab 
        color="primary" 
        size="medium" 
        onClick={scrollToTop}
        sx={{ 
          position: 'fixed', 
          bottom: 32, 
          right: 32, 
          zIndex: 999 
        }}
      >
        <ArrowUp size={24} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;