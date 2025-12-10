
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, useTheme, Snackbar, Alert } from '@mui/material';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../constants';

const Contact: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      // Here you would typically send data to backend
      setOpenSnackbar(true);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="subtitle2" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 'bold', mb: 1 }}>
          {t.subtitle}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {t.title} <span style={{ color: theme.palette.primary.main }}>{t.titleHighlight}</span>
        </Typography>
      </Box>

      <Paper 
        elevation={4}
        sx={{ 
          p: { xs: 3, md: 6 }, 
          bgcolor: 'background.paper', 
          borderRadius: 3,
          border: 1,
          borderColor: 'divider'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField 
                fullWidth 
                name="name"
                label={t.name} 
                variant="outlined" 
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                fullWidth 
                name="email"
                label={t.email} 
                variant="outlined" 
                placeholder="john@company.com"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                name="message"
                label={t.message} 
                variant="outlined" 
                multiline
                rows={4}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary' }}>
                 <CheckCircle2 size={16} color={theme.palette.success.main} /> 
                 <Typography variant="caption">{t.freeConsult}</Typography>
              </Box>
              <Button 
                variant="contained" 
                size="large" 
                type="submit"
                endIcon={<Send size={18} />}
                sx={{ px: 4, py: 1.5 }}
              >
                {t.send}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box 
          sx={{ 
            mt: 6, 
            pt: 4, 
            borderTop: 1, 
            borderColor: 'divider', 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
            gap: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Mail size={16} color={theme.palette.primary.main} />
            <Typography variant="body2">contact@mds-engineering.com</Typography>
          </Box>
          <Typography variant="body2">Paris, France</Typography>
        </Box>
      </Paper>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {t.successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
