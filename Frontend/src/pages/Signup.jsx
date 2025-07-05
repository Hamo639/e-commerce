import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  CssBaseline,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { motion } from 'framer-motion';



  
  


  


const Signin = () => {
  const theme=useTheme()
  const navigate= useNavigate()
  const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

    const [user ] = useAuthState(auth);

  const handleSubmit = (eo) => {
    eo.preventDefault();
      const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
  setSuccess("Verification email sent. Please check your inbox.");
    // ...
  });

    console.log("doneeeeeeee")
    setemail("")
    setpassword("")
    setname("")
    // ...
  })
  .catch((error) => {
   setError(error.message);

    // ..
  });
  };
  
  if (user && !user.emailVerified) {
  return (
    <main style={{ textAlign: "center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px" }}>
      <h1>Please verify your email.</h1>
      <p>Check your inbox and click the verification link.</p>
      <Button

        variant="contained"
        onClick={async () => {
          await user.reload();
          if (user.emailVerified) {
            navigate('/');
          }
        }}
      >
        Check Verification
      </Button>
    </main>
  );
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
        {error && <Typography color="error">{error}</Typography>}
{success && <Typography color="green">{success}</Typography>}

        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
          onChange={(eo) => {
            setname(eo.target.value)
          }
          }
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="email"
            autoFocus
            value={name}
            autoComplete='off'
          />
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
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
        
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2,bgcolor:"#2B3445",textTransform:"capitalize",fontSize:"21px",color:"wheat",transition:"all 0.3s","&:hover":{scale:0.98}}}
          >
            Sign up
          </Button>
          
        </Box>
      </Box>
    </Container>
    </motion.div>
    
  );
}

  


export default Signin;
