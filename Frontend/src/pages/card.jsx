import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  Container,
  Stack,
  Divider,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, deleteproduct, increase } from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Cardd = () => {
    const [Showloading, setShowloading] = useState(true);
  const [Showcontent, setShowcontent] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setShowloading(false)
    setShowcontent(true)
  }, 3000);
  }, [])
  // @ts-ignore
  const { selectedproduct } = useSelector((state) => state.cartt);
  const dispatch = useDispatch();
const navigate=useNavigate()
  let subtotal = 0;

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      {Showcontent&&(  <Container maxWidth="md" sx={{ mt: 6 }}>
        {selectedproduct.map((item) => {
          subtotal += item.price * item.quantity;
          return (
            <Card
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#1c1c1e',
                color: '#fff',
                mb: 3,
                borderRadius: 3,
                boxShadow: 3,
                p: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 2,
                  objectFit: 'contain',
                  mb: { xs: 2, sm: 0 },
                }}
                image={item.imageLink[0]}
                alt={item.productName}
              />

              <Box sx={{ flex: 1, ml: { sm: 3 }, textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                  ${item.price * item.quantity}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1} alignItems="center" sx={{ my: { xs: 2, sm: 0 } }}>
                <IconButton onClick={() => dispatch(decrease(item))} sx={{ bgcolor: '#2c2c2e', color: '#fff' }}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{item.quantity}</Typography>
                <IconButton onClick={() => dispatch(increase(item))} sx={{ bgcolor: '#2c2c2e', color: '#fff' }}>
                  <AddIcon />
                </IconButton>
              </Stack>

              <IconButton
                onClick={() => dispatch(deleteproduct(item))}
                sx={{ color: '#ff5f57', ml: { sm: 2 }, mt: { xs: 1, sm: 0 } }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          );
        })}

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center', bgcolor: '#292929', p: 3, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Order Summary
          </Typography>

          <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
            Total: ${subtotal}
          </Typography>

          <Button onClick={() => {
            navigate("/checkout")
          }
          } variant="contained" color="primary" size="large" sx={{ px: 5, py: 1.5 }}>
            Checkout
          </Button>
        </Box>
      </Container>)}
      {Showloading&&(
  
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

)}
    
    </main>
  );
};

export default Cardd;
