import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";

const Header3 = () => {
  const araay = [
    { name: "الغسالات" },
    { name: "التلاجات" },
    { name: "الميكرويف" },
    { name: "شاشات" },
    { name: "خلاطات" },
    { name: "تويستر" },
  ];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: "#2B3445",

            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon sx={{ color: "#fff" }} />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
              color: "white",
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon sx={{ color: "#fff" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: "#2B3445",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined sx={{ color: "#fff" }} fontSize="small" />
            </ListItemIcon>

            <ListItemText sx={{ color: "#fff" }}>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            </ListItemIcon>

            <ListItemText sx={{ color: "#fff" }}>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined sx={{ color: "#fff" }} fontSize="small" />
            </ListItemIcon>

            <ListItemText sx={{ color: "#fff" }}>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined sx={{ color: "#fff" }} fontSize="small" />
            </ListItemIcon>

            <ListItemText sx={{ color: "#fff" }}>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {/* design mobile */}
      <Box>
        {useMediaQuery("(max-width:1200px)") && (
          <IconButton aria-label="" onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          sx={{ ".MuiPaper-root.MuiPaper-elevation16": { height: "100%" } }}
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          <Box
            sx={{
              width: {xs:"300px",md:"400px"},
              mx: "auto",
              mt: "100px",
              position: "relative",
              pt: 5,
            }}
          >
            <IconButton
              sx={{
                ":hover": {
                  color: "red",
                  rotate: "360deg",
                  transition: "0.3s",
                },
                position: "absolute",
                top: "0",
                right: "5px",
              }}
              aria-label=""
              onClick={toggleDrawer("top", false)}
            >
              <Close sx={{}} />
            </IconButton>
            {araay.map((item) => {
              return (
                <Accordion
                 key={item.name}
                  elevation={0}
                  sx={{ pt: 0, bgcolor: "initial", mt: 1 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{item.name}</Typography>
                  </AccordionSummary>
                  <List sx={{ ".MuiListItem-root": { pt: 0 } }}>
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="Link1" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="Link2" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="Link3" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Box>
      {/* design mobile */}

      {araay.map((item) => {
        return (
          <Box
          key={item.name}
            sx={{
              padding: "10px",
              display: { xs: "none", lg: "flex" },
              position: "relative",
              ":hover .showhover": { display: "block", alignItems: "center" },
              ":hover": { cursor: "pointer" },
            }}
          >
            <Typography
              sx={{
                color:
                  // @ts-ignore
                  theme.palette.mode.primary,
              }}
              variant="body1"
              color="initial"
            >
              {item.name}
            </Typography>
            <ExpandMore />
            <Paper
              className="showhover"
              sx={{
                zIndex: 3,
                minWidth: "130px",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                display: "none",
              }}
            >
              <List component="nav" aria-label="secondary mailbox folder">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Dashbord" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    position: "relative",
                    paddingRight: "20px",
                    ":hover .showwhenhover": { display: "block" },
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary="Products" />
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemButton>

                  <Paper
                    className="showwhenhover"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      display: "none",
                      ml: 1,
                    }}
                  >
                    <List component="nav" aria-label="secondary mailbox folder">
                      <ListItemButton>
                        <ListItemText primary="Dashbord" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemText primary="Products" />
                        <KeyboardArrowRightOutlinedIcon />
                      </ListItemButton>
                    </List>
                  </Paper>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Orders" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Box>
        );
      })}
    </Container>
  );
};

export default Header3;
