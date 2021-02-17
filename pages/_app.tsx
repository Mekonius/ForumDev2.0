import '../styles/globals.css'
import { GetServerSideProps } from 'next';
import NavBar from "../components/navbar"
import { Toaster } from "react-hot-toast"
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {
  
  const userData = useUserData();   
  
  return(
    <>
    <UserContext.Provider value={userData}>
      <Toaster />
      <NavBar />
      <Component {...pageProps} />
    </UserContext.Provider>
      
    </>
    
  );
  

}

export default MyApp
