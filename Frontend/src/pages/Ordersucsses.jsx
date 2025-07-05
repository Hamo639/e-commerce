import React from 'react';
import { Container, Typography, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1}}
>
    <Container maxWidth="sm" sx={{ mt: 10,height:"560px" }}>
      <Card sx={{ p: 4, textAlign: 'center', boxShadow: 5, borderRadius: 4 }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          تم تأكيد الطلب بنجاح
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          شكراً لك على الشراء من متجرنا
          <br/>
       🎉 سيتم تجهيز طلبك وشحنه في أسرع وقت ممكن.
        </Typography>

        
        <Button component={Link} to="/" variant="contained" size="large">
          العودة للرئيسية
        </Button>
      </Card>
    </Container>
    </motion.div>
  );
};

export default OrderSuccess;
