import Navbar from "../components/Navbar";  
import { useAuthContext } from '../hooks/useAuthContext';
import PackageCategory from "./sales/PackageCategory";

const Home = () => {

    const { user } = useAuthContext();
    
    return ( 
        <>
            <Navbar />  
            <PackageCategory/>
        </>
     );
}
 
export default Home;