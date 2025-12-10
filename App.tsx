
import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProcessWorkflow from './components/ProcessWorkflow';
import QuoteCalculator from './components/QuoteCalculator';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import LiveChat from './components/LiveChat';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                // Dark Mode: Deep Navy Blue Corporate Theme
                background: {
                  default: '#0a1929', // Deep Navy Blue
                  paper: '#132f4c',   // Lighter Navy
                },
                primary: {
                  main: '#3399ff', // Bright Blue for action items
                },
                secondary: {
                  main: '#66b2ff',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#b2bac2',
                },
                divider: '#1e4976',
              }
            : {
                // Light Mode: Clean Corporate Blue
                background: {
                  default: '#f0f4f8',
                  paper: '#ffffff',
                },
                primary: {
                  main: '#0059b2', // Professional Dark Blue
                },
                secondary: {
                  main: '#007fff',
                },
                text: {
                  primary: '#1a2027',
                  secondary: '#3e5060',
                },
              }),
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontWeight: 800 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 600 },
          button: { textTransform: 'none', fontWeight: 600 },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none', // Remove default material gradient
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', transition: 'background-color 0.3s' }}>
          <Navbar mode={mode} toggleTheme={toggleTheme} />
          
          <Container maxWidth="lg" sx={{ pt: 4, pb: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Box id="home">
              <Hero />
            </Box>
            
            <Box id="services">
              <Services />
            </Box>

            <Box id="process">
              <ProcessWorkflow />
            </Box>

            <Box id="quote">
              <QuoteCalculator />
            </Box>

            <Box id="why-us">
              <WhyChooseUs />
            </Box>
            
            <Box id="projects">
              <Projects />
            </Box>
            
            <Box id="testimonials">
              <Testimonials />
            </Box>
            
            <Box id="skills">
              <Skills />
            </Box>

            <Box id="faq">
              <FAQ />
            </Box>
            
            <Box id="contact">
              <Contact />
            </Box>
          </Container>

          <Footer />
          <ScrollToTop />
          <LiveChat />
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
