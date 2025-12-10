
import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, Typography, TextField, IconButton, Button, Fade, Avatar, CircularProgress, useTheme } from '@mui/material';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS, CHAT_BOT_LOGIC, CHAT_DEFAULT_RESPONSE } from '../constants';
import { ChatMessage } from '../types';

const LiveChat: React.FC = () => {
  const { language } = useLanguage();
  const theme = useTheme();
  const t = TRANSLATIONS[language].chat;
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'init', text: t.welcome, sender: 'bot', timestamp: new Date() }
      ]);
    }
  }, [isOpen, t.welcome, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setMessageText('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      let responseText = CHAT_DEFAULT_RESPONSE[language];
      const lowerInput = userMsg.text.toLowerCase();

      // Simple keyword matching logic
      const logic = CHAT_BOT_LOGIC[language];
      const match = logic.find(entry => entry.keywords.some(k => lowerInput.includes(k)));
      
      if (match) {
        responseText = match.response;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 32, right: { xs: 20, md: 100 }, zIndex: 1000 }}>
      {/* Chat Window */}
      <Fade in={isOpen}>
        <Paper 
          elevation={12}
          sx={{ 
            position: 'absolute', 
            bottom: 80, 
            right: 0, 
            width: 340, 
            height: 450, 
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: 4,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper'
          }}
        >
          {/* Header */}
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'primary.main', fontSize: 14, fontWeight: 'bold' }}>AI</Avatar>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>MDS Assistant</Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>Online</Typography>
              </Box>
            </Box>
            <IconButton size="small" onClick={() => setIsOpen(false)} sx={{ color: 'white' }}>
              <X size={18} />
            </IconButton>
          </Box>

          {/* Messages Area */}
          <Box sx={{ flexGrow: 1, p: 2, bgcolor: theme.palette.mode === 'dark' ? '#0d1f33' : '#f5f7fa', overflowY: 'auto' }}>
            {messages.map((msg) => (
              <Box 
                key={msg.id} 
                sx={{ 
                  display: 'flex', 
                  gap: 1, 
                  mb: 2, 
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' 
                }}
              >
                {msg.sender === 'bot' && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main', fontSize: 10 }}>MDS</Avatar>
                )}
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 1.5, 
                    borderRadius: msg.sender === 'bot' ? '0 12px 12px 12px' : '12px 0 12px 12px', 
                    bgcolor: msg.sender === 'bot' ? 'background.paper' : 'primary.main',
                    color: msg.sender === 'bot' ? 'text.primary' : 'white',
                    maxWidth: '80%',
                    boxShadow: 1
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Paper>
              </Box>
            ))}
            
            {isTyping && (
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main', fontSize: 10 }}>MDS</Avatar>
                <Paper sx={{ p: 1.5, borderRadius: '0 12px 12px 12px', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                   <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.secondary', animation: 'pulse 1s infinite' }} />
                   <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.secondary', animation: 'pulse 1s infinite 0.2s' }} />
                   <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.secondary', animation: 'pulse 1s infinite 0.4s' }} />
                </Paper>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper', display: 'flex', gap: 1, alignItems: 'center' }}>
             <TextField 
               fullWidth 
               size="small" 
               placeholder={t.placeholder} 
               variant="outlined" 
               sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, bgcolor: 'background.default' } }}
               value={messageText}
               onChange={(e) => setMessageText(e.target.value)}
               onKeyPress={handleKeyPress}
             />
             <IconButton color="primary" onClick={handleSendMessage} disabled={!messageText.trim()}>
               <Send size={20} />
             </IconButton>
          </Box>
        </Paper>
      </Fade>

      {/* Floating Button */}
      {!isOpen && (
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setIsOpen(true)}
          sx={{ 
            borderRadius: '50px', 
            height: 60, 
            minWidth: 60, 
            boxShadow: '0 4px 12px rgba(0,120,255,0.4)',
            animation: 'bounce 2s infinite'
          }}
        >
          <MessageCircle size={28} />
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              width: 14, 
              height: 14, 
              bgcolor: '#44b700', 
              borderRadius: '50%', 
              border: '2px solid white' 
            }} 
          />
        </Button>
      )}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
          @keyframes bounce {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-6px); }
          }
        `}
      </style>
    </Box>
  );
};

export default LiveChat;
