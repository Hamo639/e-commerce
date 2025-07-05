import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  
  Box,
  Typography,
  Container,
  CssBaseline,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { motion } from 'framer-motion';
import { blueGrey, teal } from '@mui/material/colors';



const Signin = () => {
    const [user ] = useAuthState(auth);
const theme=useTheme()
  const navigate=useNavigate()
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, seterror] = useState('');
const handleSubmit = (eo) => {
    eo.preventDefault();
  /////////////*firebase*/////////////
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("doneeeeeeeeeee")
    navigate("/")
    // ...
  })
  .catch((error) => {
  
    seterror("email or password is incooret")
  });

  
  }

  return (
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1}}
>
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        // minHeight:"calc(100vh - 300px)"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box onSubmit={handleSubmit} component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
          onChange={(eo) => {
            setemail(eo.target.value)
          }
          }
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            autoComplete='off'
          />
          <TextField
          onChange={(eo) => {
            setpassword(eo.target.value)
          }
          }
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete='off'
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
        
          
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {error&&(
             <Typography color="error" align="center" mt={1}>
    {error}
  </Typography>
          )}
            <Box sx={{display:"flex",justifyContent:"center",mt:2}} >
            <Link style={{color:blueGrey[400],fontSize:"20px",textDecoration:"underline"}} to="/signup">
  Don't have an account? Sign Up
</Link>
              </Box> 
        </Box>
      </Box>
    </Container>
    </motion.div>
    
  );
}

  


export default Signin;
