import { Button } from "@mui/material";
import Header2 from "../component/Header/Header2";
import Header3 from "../component/Header/Header3";
import Hero from "../component/Hero/hero";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";


const Home = ({mode,setmode}) => {
    const [user ] = useAuthState(auth);
    if (!user) {
      return(
        <main>
      <Hero/>
    </main>
        
      )
    }
if (user) {
  return (
    <main>
      <Header2/>
      <Header3/>
      <Hero/>
    </main>
  );
}
}
  

export default Home;
