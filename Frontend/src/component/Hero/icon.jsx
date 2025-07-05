import {
  AccessAlarm,
  CreditScore,
  ElectricBolt,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./Hero.css";
const Iconsection = () => {
  const theme=useTheme()
  return (
    <Container  sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack 
      divider={<Divider sx={{display:{xs:"none",lg:"block"}}} orientation="vertical" flexItem/>}
        sx={{  alignItems: "center",flexWrap:"wrap" }}
        direction="row"
      >
        <Box   sx={{
        width: 240,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,

        py: 2,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}>
          <ElectricBolt fontSize="large" sx={{ mr: 5 }} />
          <Box className="darkmodetypography">
            <Typography variant="body1" >
              Fast deliver
            </Typography>
            <Typography variant="body1" >
              Start from 10$
            </Typography>
          </Box>
        </Box>
        <Box   sx={{
        width: 240,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}>
          <CreditScore fontSize="large" sx={{mr:5}} />
          <Box>
            <Typography variant="body1" >
              Payment
            </Typography>
            <Typography variant="body1" >
             Secure system           
            </Typography>
          </Box>
        </Box>
        <Box   sx={{
        width: 240,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}>
          <WorkspacePremium fontSize="large" sx={{mr:5}} />
          <Box>
            <Typography variant="body1">
              Money Guranate
            </Typography>
            <Typography variant="body1" >
              7 Days Back
            </Typography>
          </Box>
        </Box>
        <Box  sx={{
        width: 240,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}>
          <AccessAlarm fontSize="large" sx={{mr:5}} />
          <Box>
            <Typography variant="body1" >
              365 days
            </Typography>
            <Typography variant="body1" >
              for free return
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Iconsection;
