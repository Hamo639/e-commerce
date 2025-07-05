import { ArrowForward} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  typographyClasses,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import Iconsection from "./icon";
import Cardsection from "../Cardsection.jsx/Cardsection";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";


const Hero = () => {
  const [Showloading, setShowloading] = useState(true);
  const [Showcontent, setShowcontent] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setShowloading(false)
    setShowcontent(true)
  }, 3000);
  }, [])
  return (
    <Box sx={{}}>
    {Showcontent&&<Container>
      <Box sx={{ pt:2,mt: 3, display: "flex", alignItems: "center",mb:"20px"}}>
      <Swiper
      loop={true}
        style={{height:"500px"}}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img style={{borderRadius:"20px"}}  src="/image/2.png" alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius:"20px"}} src="/image/3.png" alt="" />
        
        </SwiperSlide>
      </Swiper>

      <Box
        sx={{
          display: {  xs: "block" },
          justifyContent:"center",
          alignItems:"center",
          ml: "30px",
        }}
      >
        <Box sx={{ position: "relative",scale:"0.99","&:hover":{scale:"1",rotate:"10deg"},transition:"all ease 1s"}}>
          <img style={{borderRadius:"5px"}}  width={"100%"} src="/image/4.png" alt="" />
          
        </Box>
        <Box sx={{ position: "relative",scale:"0.99","&:hover":{scale:"1",rotate:"10deg"},transition:"all ease 1s"}}>
          <img style={{borderRadius:"5px"}} width={"100%"} src="/image/5.png" alt="" />
        
        </Box>
      </Box>
      </Box>
    <Iconsection/>
    <Cardsection/>
    </Container>}
    
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
    </Box>
  );
};

export default Hero;
