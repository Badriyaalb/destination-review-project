import './Places.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Thumbs from './ThumbsUp';
import Thumbss from "../imgs/thumbss.png";

function SubmitReview(){
   
return(

    <>
    <Header/><br/>
    <section id="reviewbox">
     
      <h1 id="reviewheadtt" > Add You Review</h1>
      <section id="sec1">
            <div id="flexnameandthumbs">
            <textarea id="UserNamett" placeholder="Name"></textarea>  <Thumbs/> <br/>
        </div>
        <textarea id="UserReviewtt" placeholder="Review"></textarea><img id="feedbackimg"src={Thumbss}/><br/>
        <button onclick="" id="Submitbuttonttt"> Submit</button>
     </section></section>
      
    <Footer/>
    </>
    
)

}
export default SubmitReview;