/* eslint-disable jsx-a11y/alt-text */
import { useTheme } from "@emotion/react";
import {
  Box,
  IconButton,
  List,
  ListItemText,
  Menu,
  MenuItem,
  ListItem,
  Button,
  
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ExpandMore, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ setmode,mode }) => {
  const theme = useTheme();
    const [user ] = useAuthState(auth);

  const options = ["EN", "AR"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate=useNavigate()
  

  


  if (!user) {
      return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#2B3445",
        Width: "100%",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          ml: "70px",
        }}
      >
        <Button
        onClick={() => {
          navigate("/")
        }
        }
          sx={{
            backgroundColor: "#db6363",
            width: "90px",
            height: "50px",
            borderRadius: "30px",
            textAlign: "center",
            textTransform:"capitalize"
            ,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // @ts-ignore
            color: "#fff",
          }}
          
        >
          Store
        </Button>
                <img src="./image/icon.png" style={{width:"120px",height:"80px"}} />

      
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: { xs: "auto", md: "70px" },
          marginLeft: { xs: "auto", md: null },
        }}
      >
        {// @ts-ignore
        theme.palette.mode === "light" ? (
          <IconButton
            aria-label=""
            onClick={() => {
              // @ts-ignore
              localStorage.setItem(
                "currentmode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              // @ts-ignore
              setmode(mode === "dark" ? "light" : "dark");
            }}
          >
            <LightModeIcon sx={{ color: "#fff" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label=""
            onClick={() => {
              // @ts-ignore
              localStorage.setItem(
                "currentmode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              // @ts-ignore
              setmode(mode === "dark" ? "light" : "dark");
            }}
          >
            <DarkModeIcon />
          </IconButton>
        )}

        <List
          component="nav"
          aria-label="Device settings"
          sx={{ color: "#fff" }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{
                display: "flex",
                direction: "rtl",
                alignItems: "center",
                color: "#fff",
                cursor: "pointer",
                ".MuiTypography-root": { color: "white" },
              }}
              secondary={options[selectedIndex]}
            >
              <ExpandMore sx={{ display: "flex", alignItems: "center" }} />
            </ListItemText>
          </ListItem>
        </List>
        <Menu
          sx={{ color: "#fff" }}
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ color: "#fff", display: "flex", alignItems: "center" }}>
          <Twitter />
          <Facebook sx={{ ml: "10px" }} />
          <Instagram sx={{ ml: "10px" }} />
        </Box>
        <Button className="mybutton" onClick={() => {
          navigate("/signin")
        }
        }>
          Sign in
      </Button>
      </Box>
    </Box>
  );
  }
  if (user) {
      return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#2B3445",
        Width: "100%",
        
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          ml: "70px",
        }}
      >
        <Button
        onClick={() => {
          navigate("/")
        }
        }
          sx={{
            backgroundColor: "#db6363",
            width: "90px",
            height: "50px",
            borderRadius: "30px",
            textAlign: "center",
            textTransform:"capitalize"
            ,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // @ts-ignore
            color: "#fff",
          }}
          
        >
          Store
        </Button>
<img src="/image/icon.png" alt="Logo"  style={{width:"120px",height:"80px"}} />
        
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: { xs: "auto", md: "100px" },
          marginLeft: { xs: "auto", md: null },
        }}
      >
        {// @ts-ignore
        theme.palette.mode === "light" ? (
          <IconButton
            aria-label=""
            onClick={() => {
              // @ts-ignore
              localStorage.setItem(
                "currentmode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              // @ts-ignore
              setmode(mode === "dark" ? "light" : "dark");
            }}
          >
            <LightModeIcon sx={{ color: "#fff" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label=""
            onClick={() => {
              // @ts-ignore
              localStorage.setItem(
                "currentmode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              // @ts-ignore
              setmode(mode === "dark" ? "light" : "dark");
            }}
          >
            <DarkModeIcon />
          </IconButton>
        )}

        <List
          component="nav"
          aria-label="Device settings"
          sx={{ color: "#fff" }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{
                display: "flex",
                direction: "rtl",
                alignItems: "center",
                color: "#fff",
                cursor: "pointer",
                ".MuiTypography-root": { color: "white" },
              }}
              secondary={options[selectedIndex]}
            >
              <ExpandMore sx={{ display: "flex", alignItems: "center" }} />
            </ListItemText>
          </ListItem>
        </List>
        <Menu
          sx={{ color: "#fff" }}
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ color: "#fff", display: "flex", alignItems: "center" }}>
          <Twitter />
          <Facebook sx={{ ml: "10px" }} />
          <Instagram sx={{ ml: "10px" }} />
          
        </Box>
        <Button className="mybutton" onClick={() => {
          const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/signin")
}).catch((error) => {
  // An error happened.
});

        }
        }>
          Sign out
      </Button>
      </Box>
    </Box>
  );
  }


};

export default Header;
