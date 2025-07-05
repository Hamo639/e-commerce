import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Stack
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

const CheckoutPage = () => {
    const [Showloading, setShowloading] = useState(true);
  const [Showcontent, setShowcontent] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setShowloading(false)
    setShowcontent(true)
  }, 3000);
  }, [])
  const { selectedproduct } = useSelector((state) => state.cartt);
  
  let subtotal = 0;
const navigate=useNavigate()
const [error, seterror] = useState("");
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
     if (!form.fullName || !form.address || !form.phone) {
    seterror('من فضلك قم بملء جميع الحقول المطلوبة');
    return;
  }

  // لو كله تمام نكمل هنا تنفيذ الطلب
  seterror('')
  navigate("/ordersucsess")
  ;
  };

  return (
    
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      {Showcontent&&(
        <>
  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
        Checkout
      </Typography>

      <Card sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Order Summary:
        </Typography>
        <Divider sx={{ mb: 2 }} />
      {selectedproduct.map((item) =>{
            subtotal += item.price * item.quantity;

return(
  <Stack key={item.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={item.imageLink[0]} 
        alt={item.productName} 
        style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '10px', borderRadius: '8px' }} 
      />
      <Typography>{item.productName} x {item.quantity}</Typography>
    </Box>
    <Typography>${item.price * item.quantity}</Typography>
  </Stack>
)
      }

      


)}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" sx={{ textAlign: 'right' }}>
          Total: {subtotal} EGP
        </Typography>
      </Card>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Shipping Details:
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={2}>
          <TextField
          required
            label="Full Name"
            name="fullName"
            fullWidth
            value={form.fullName}
            onChange={handleChange}
          />
          <TextField
          required
            label="Address"
            name="address"
            fullWidth
            value={form.address}
            onChange={handleChange}
          />
          <TextField
          required
            label="Phone Number"
            name="phone"
            fullWidth
            value={form.phone}
            onChange={handleChange}
          />
        </Stack>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          onClick={handleSubmit}
          fullWidth
        >
          Place Order
        </Button>
        {error && (
  <Typography  color="error" sx={{ mt: 2 ,textAlign:"center"}}>
    {error}
  </Typography>
)}
      </Card>
      </>
      )}
    {Showloading&&(
  <main>
  <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // يأخذ كامل ارتفاع الشاشة
    width: "100%",   // يأخذ كامل العرض
    position: "fixed", // يبقى ثابتًا في الشاشة
    top: 0,
    left: 0,
  }}
>
  <ReactLoading type="bubbles" color="red" height={100} width={100} />
</Box>
</main>
)}
    </Container>
  );
};

export default CheckoutPage;
