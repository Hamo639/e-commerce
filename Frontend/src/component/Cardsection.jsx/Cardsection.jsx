import { Add, AddShoppingCart, Check, Remove } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../Redux/Product";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, decrease, increase } from "../../Redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const Cardsection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setactive] = useState("all");
  const [showmessage, setshowmessage] = useState(false);
  // @ts-ignore
  const { selectedproductid, selectedproduct } = useSelector(
    (state) => state.cartt
  );

  const productquantity = (itemm) => {
    const myproduct = selectedproduct.find((item) => {
      return item.id === itemm.id;
    });

    return myproduct.quantity;
  };

  // @ts-ignore
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetproductByNameQuery("cartt");

  if (isLoading) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="bubbles" color="red" height={100} width={100} />
      </main>
    );
  }
  if (error) {
    return (
      <Typography variant="h5" color="initial">
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }
  if (data) {
    return (
      <Box>
        <Container sx={{ mb: 10, mt: 10, display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ flexGrow: 1, mb: "16px" }}>
            <Typography variant="h5">Selected Products</Typography>
            <Typography variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            // exclusive
            sx={{
              ":hover": { bgcolor: "error" },
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                bgcolor: "initial",
              },
              flexWrap: "wrap",
              // width:"min-content",
              gap: "10px",
            }}
          >
            <ToggleButton
              onClick={() => {
                setactive("all");
              }}
              sx={{
                color: theme.palette.text.primary,
                textTransform: "capitalize",
              }}
              className={`mybutton ${active === "all" ? "Mui-selected" : null}`}
              color="error"
              value={""}
              aria-label=""
            >
              All Products
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setactive("men");
              }}
              sx={{
                color: theme.palette.text.primary,
                textTransform: "capitalize",
              }}
              className={`mybutton ${active === "men" ? "Mui-selected" : null}`}
              color="error"
              value={""}
              aria-label=""
            >
              Men Categroies
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setactive("woman");
              }}
              sx={{
                color: theme.palette.text.primary,
                textTransform: "capitalize",
                outline: "none",
                border: "2px solide teal!important",
              }}
              className={`mybutton ${
                active === "woman" ? "Mui-selected" : null
              }`}
              color="error"
              value={""}
              aria-label=""
            >
              Woman Categroies
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>

        <Container
          sx={{
            pb: "150px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {data.map((item) => {
            return (
              <Box
                sx={{
                  "&:hover": {
                    rotate: "2deg",
                    boxShadow: "0 0 15px 4px rgba(255, 111, 0, 0.4)",
                  },
                  transition: "all ease 0.7s",
                  borderRadius: "7px",
                  background: "null",
                }}
                key={item.price}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    my: "10px",
                    height: "450px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s",

                    mx: { xs: "20px", md: null },
                  }}
                >
                  <CardMedia
                    onClick={() => {
                      navigate(`/productdetails/${item.id}`);
                    }}
                    sx={{
                      height: 220,
                      "&:hover": {
                        scale: "1.1",
                        transition: "0.7s",
                      },
                    }}
                    component="img"
                    alt="green iguana"
                    height="277"
                    image={item.imageLink[0]}
                  />

                  <CardContent>
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6">{item.productName}</Typography>
                      <Typography
                        sx={{ color: "red" }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {item.price} EGP
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {selectedproductid.includes(item.id) ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <IconButton
                          onClick={() => {
                            dispatch(decrease(item));
                          }}
                          sx={{
                            bgcolor: "#2c2c2e",
                            color: "white",
                            "&:hover": { bgcolor: "#444" },
                          }}
                        >
                          <Remove />
                        </IconButton>
                        <Typography>{productquantity(item)}</Typography>
                        <IconButton
                          onClick={() => {
                            dispatch(increase(item));
                          }}
                          sx={{
                            bgcolor: "#2c2c2e",
                            color: "white",
                            "&:hover": { bgcolor: "#444" },
                          }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    ) : (
                      <Button
                        onClick={() => {
                          dispatch(addtocart(item));
                          setshowmessage(true);
                          setTimeout(() => {
                            setshowmessage(false);
                          }, 4000);
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="small"
                      >
                        <AddShoppingCart /> Add to card
                      </Button>
                    )}

                    <Stack spacing={1}>
                      <Rating
                        name="size-large"
                        defaultValue={item.rate}
                        precision={0.5}
                      />
                    </Stack>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Container>
        <Typography
          sx={{
            transition: "1s",
            right: showmessage ? "30px" : "-100vw",
            fontSize: "30px",
            color: "#000",
            position: "fixed",
            top: "25px",
            zIndex: 3,
            bgcolor: "white",
            px: 5,
            borderRadius: "5px",
            display:"flex",alignItems:"center"
          }}
          variant="body1"
        >
          task add succsefully
          <Check
            sx={{ bgcolor: "green", color: "white", borderRadius: "50%" }}
          />
        </Typography>
      </Box>
    );
  }
};

export default Cardsection;
