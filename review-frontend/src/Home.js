import Header from "./components/Header";
import Footer from "./components/Footer";
import Attractionlist from "./components/Attractionlist";
import IMGW from "./imgs/place-img.jpg";
import motiongate from "./imgs/place-motiongate.webp";
import readyset from "./imgs/place-ready.png";
import kidzania from "./imgs/place-kidzania.jpg";
import gardenglow from "./imgs/place-GardenGlow.jpg";


function Home(){
    return(
        <>
        <Header/>
        <div>
            <Attractionlist placeimg={IMGW}  location="Dubai" ticket="345-350" day="Everyday" rating="No rating" /> 
            <Attractionlist placeimg={motiongate}  location="Dubai" ticket="240-330" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={readyset}  location="Dubai" ticket="85-150" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={kidzania}  location="Dubai-AbuDhabi" ticket="195-260" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={gardenglow}  location="Dubai" ticket="60-89" day="Everyday" rating="No rating" />    
        </div>
        <Footer/>
        </>
    )
}
export default Home;