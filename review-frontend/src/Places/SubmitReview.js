import './Places.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Thumbss from "../imgs/thumbss.png";
import axios from "axios";
import {useState} from 'react';



function SubmitReview(){
   const [Username, setUsername]=useState("");
   const [Userreview, setUserreview]=useState("");
   
return(

    <>
    <Header/><br/>
    <section  id="reviewbox">
     
      <h1 id="reviewheadtt">Add You Review</h1>
      <section id="sec1">
            <div id="flexnameandthumbs">
            <textarea onChange={(e)=>{setUsername(e.target.value); console.log(Username);}} id="UserNamett" placeholder="Name" required></textarea><br/>
        </div>
        <textarea onChange={(e)=>{setUserreview(e.target.value); console.log(Userreview);}} id="UserReviewtt" placeholder="Review" required></textarea><img id="feedbackimg"src={Thumbss}/><br/>
        <button  onClick={(e)=>{e.preventDefault(); axios.post("http://localhost:1440/addReview", {Username, Userreview})}}  id="Submitbuttonttt"> Submit</button>
     </section></section>
      
    <Footer/>
    </>
    
)

}
export default SubmitReview;