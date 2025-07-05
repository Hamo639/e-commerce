import { Box, Button, IconButton, Typography } from '@mui/material';
import { useGetoneproductByNameQuery } from '../../Redux/Product';
import {  useParams } from 'react-router-dom';
import "./productdetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, decrease, increase } from '../../Redux/productSlice';
import { useEffect, useRef, useState } from 'react';
import Detailsthumb from './Detailsthumb';
import { Add, AddShoppingCart, Check, Remove } from '@mui/icons-material';
import Header2 from '../../component/Header/Header2';
import ReactLoading from 'react-loading';
import Header1 from '../../component/Header/Header1';
import Footer from '../../component/Footer/Footer';
import { motion } from 'framer-motion';
const Productdetails = ({setmode,mode}) => {
  const [showmessage, setshowmessage] = useState(false);
    const [Showloading, setShowloading] = useState(true);
  const [Showcontent, setShowcontent] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setShowloading(false)
    setShowcontent(true)
  }, 3000);
  }, [])
  let{id} =useParams()
  const dispatch = useDispatch()
  const [index, setindex] = useState(0);
  const myRef=useRef(null)
  const handleImgChange = (index) => {
     setindex(index);
    const images = myRef.current.children;
    // remove all img active class 
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active");
    }
    // set current img active class 
    images[index].className = "active";
  }
  
    const { data, error, isLoading } = useGetoneproductByNameQuery(id)
    // @ts-ignore
    const { selectedproductid,selectedproduct } = useSelector((state) => state.cartt);
  const productquantity = (itemm) => {
    const myproduct=selectedproduct.find((data) => {
      return data.id===itemm.id
    }
    )
    return myproduct.quantity
  }



if (isLoading) {
  return (
    
    <main style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ReactLoading type="bubbles" color="red" height={100} width={100} />
    </main>
  )
}
  if (error) {
    return(
        <main>
      <Header1 setmode={setmode} mode={mode}/>
      <Typography variant="body1" color="initial">errrrrrrrrrrrrrror</Typography>
          <Footer/>
</main>
    )
  }
if (data) {
    return (
    <Box>
      {Showcontent&&(
        <>
  <Header2/>
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2}}
>
    <main>
        <section className='app'>
      
        
          <div  className="details">
            <div className='large-img-wrapper'>
              <img src={data.imageLink[index]} alt="largeImg" className='large-img'/>
            </div>

            <div className='box'>
              <div className='row'>
                <h2>{data.productName}</h2>
                <span>{data.price} $</span>
              </div>
              {/* colors components  */}
              {/* <Colors colors={colors}/> */}
              <p>{data.description}</p>
              {/* small images components */}
              <Detailsthumb images={data.imageLink} handleImgChange={handleImgChange} myRef={myRef}/>
                {selectedproductid.includes(data.id)?<Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center", gap: 1,mt:"15px" }}>
                              <IconButton onClick={() => {
                                dispatch(decrease(data))
                              }
                              }
                                sx={{
                                  bgcolor: '#2c2c2e',
                                  color: 'white',
                                  '&:hover': { bgcolor: '#444' },
                                }}
                              >
                                <Remove />
                              </IconButton>
                              <Typography variant="h6">{productquantity(data)}</Typography>
                              <IconButton onClick={() => {
                                dispatch(increase(data))
                              }
                              }
                                sx={{
                                  bgcolor: '#2c2c2e',
                                  color: 'white',
                                  '&:hover': { bgcolor: '#444' },
                                }}
                              >
                                <Add />
                              </IconButton>
                            </Box>:
                            <Box sx={{display:"flex",justifyContent:{xs:"center",md:"left"},alignItems:"center"}}>
                            <Button
                            variant='contained'
                    onClick={() => {
                    dispatch(addtocart(data))
                    setshowmessage(true)
                    setTimeout(() => {
                      setshowmessage(false)
                    }, 3000)
                    
                    
                    }
                    }
                    sx={{ textTransform: "capitalize",mt:"20px", }}
                    size="large"
                  >
                    <AddShoppingCart /> Add to card
                  </Button>
                  
                  </Box>
                  
                  }
                
            </div>
          </div>
        
      
    </section>
    </main>
    </motion.div>
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
  <Typography
          sx={{
            transition: "1s",
            right: showmessage ? "30px" : "-200vw",
            fontSize: {xs:"15px",md:"30px"},
            color: "#000",
            position: "fixed",
            top: "25px",
            zIndex: 3,
            bgcolor: "white",
            px: 5,
            py:2.5,
            borderRadius: "5px",
            display:"flex",alignItems:"center",justifyContent:"center"
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

}

export default Productdetails;
