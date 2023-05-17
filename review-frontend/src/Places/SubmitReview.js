import './Places.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Thumbs from './ThumbsUp';

function SubmitReview(){
   
return(

    <>
    <Header/><br/>
    <section id="reviewbox">
     
      <h1> Add You Review</h1>
      <div id="flexnameandthumbs">
        <textarea id="UserNamett" placeholder="Name"></textarea> <Thumbs/> <br/>
      </div>
      <textarea id="UserReviewtt" placeholder="Review"></textarea><br/>
      <button onclick="" id="Submitbuttonttt"> Submit</button>
     </section>
    <Footer/>
    </>
    
)

}
export default SubmitReview;