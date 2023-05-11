import Header from "./components/Header";
import Footer from "./components/Footer";
import Attractionlist from "./components/Attractionlist";
import IMGWorld from "./imgs/place-img.jpg";
import motiongate from "./imgs/place-motiongate.webp";
import readyset from "./imgs/place-ready.png";
import kidzania from "./imgs/place-kidzania.jpg";
import gardenglow from "./imgs/place-GardenGlow.jpg";


function Home(){
    return(
        <>
        <Header/>
        <div>
            <Attractionlist placeimg={IMGWorld} placename="IMG World" location="Dubai" ticket="345-350" day="Everyday" rating="No rating" /> 
            <Attractionlist placeimg={motiongate} placename="Motiongate" location="Dubai" ticket="240-330" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={readyset} placename="Ready Set Go" location="Dubai" ticket="85-150" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={kidzania} placename="Kidzania" location="Dubai-AbuDhabi" ticket="195-260" day="Everyday" rating="No rating" />  
            <Attractionlist placeimg={gardenglow} placename="Garden Glow" location="Dubai" ticket="60-89" day="Everyday" rating="No rating" />    
        </div>
        <Footer/>
        </>
    )
}
export default Home;