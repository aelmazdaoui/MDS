
import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, Tabs, Tab, Box, Typography, 
  TextField, Button, InputAdornment, LinearProgress, Alert, useTheme 
} from '@mui/material';
import { CreditCard, Truck, Lock, Wallet, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../constants';

interface ClientHubProps {
  open: boolean;
  onClose: () => void;
}

const ClientHub: React.FC<ClientHubProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].clientHub;
  
  const [activeTab, setActiveTab] = useState(0);
  const [projectId, setProjectId] = useState('');
  const [showProgress, setShowProgress] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'none' | 'success'>('none');

  const handleTrack = () => {
    if (projectId) setShowProgress(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: { 
          borderRadius: 3,
          bgcolor: 'background.paper',
          backgroundImage: 'none'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, borderBottom: 1, borderColor: 'divider' }}>
         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            MDS. {t.title}
         </Typography>
         <Button onClick={onClose} size="small" sx={{ minWidth: 32, p: 1, borderRadius: '50%' }}>
            <X size={20} />
         </Button>
      </Box>

      <Tabs 
        value={activeTab} 
        onChange={(_, v) => setActiveTab(v)} 
        variant="fullWidth" 
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<CreditCard size={20} />} label={t.tabPayment} iconPosition="start" />
        <Tab icon={<Truck size={20} />} label={t.tabTracking} iconPosition="start" />
      </Tabs>

      <DialogContent sx={{ p: 4, minHeight: 400 }}>
        {activeTab === 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
             {paymentStatus === 'success' ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Payment processed successfully! Transaction ID: #TXN-9821
                </Alert>
             ) : (
               <>
                 <TextField 
                    fullWidth 
                    label={t.invoiceLabel} 
                    variant="outlined" 
                    placeholder="INV-2025-001"
                 />
                 <TextField 
                    fullWidth 
                    label={t.amountLabel} 
                    type="number"
                    variant="outlined" 
                    InputProps={{
                      startAdornment: <InputAdornment position="start">€</InputAdornment>,
                    }}
                 />
                 
                 <Box sx={{ mt: 2 }}>
                    <Button 
                      fullWidth 
                      variant="contained" 
                      size="large" 
                      onClick={handlePayment}
                      disabled={isProcessing}
                      startIcon={<CreditCard size={20} />}
                      sx={{ mb: 2, height: 48 }}
                    >
                      {isProcessing ? 'Processing...' : t.payCard}
                    </Button>
                    <Button 
                      fullWidth 
                      variant="outlined" 
                      size="large"
                      onClick={handlePayment}
                      disabled={isProcessing}
                      startIcon={<Wallet size={20} />} // PayPal metaphor
                      sx={{ height: 48 }}
                    >
                      {t.payPaypal}
                    </Button>
                 </Box>

                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, color: 'text.secondary', mt: 2 }}>
                    <Lock size={14} />
                    <Typography variant="caption">{t.secureNote}</Typography>
                 </Box>
               </>
             )}
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField 
              fullWidth 
              label={t.trackLabel} 
              variant="outlined" 
              placeholder="PRJ-XXXX"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
            />
            <Button 
              fullWidth 
              variant="contained" 
              onClick={handleTrack}
              disabled={!projectId}
            >
              {t.trackBtn}
            </Button>

            {showProgress && (
              <Box sx={{ mt: 4, p: 3, bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'grey.100', borderRadius: 2 }}>
                 <Typography variant="subtitle2" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                   {t.demoStatus}
                 </Typography>
                 <LinearProgress variant="determinate" value={85} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
                 <Typography variant="caption" color="text.secondary">
                   Last updated: 2 hours ago
                 </Typography>
              </Box>
            )}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ClientHub;
