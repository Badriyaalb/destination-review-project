import  './Places.css';
import Description from './Description';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reviews from './Reviews';


function Placedescription(){
    return(
        <>
            <Header/>
            <section id="middlePP">
                <Description desthead='IMG World' Description='The Ilyas & Mustafa Galadari Group (IMG Group) is a highly regarded, is a  amuzement park which have the marvel heros and cartoon network animations in games.'/>
                <div>
                        <div id="Reviewsgridbox">
                            <Reviews id="review1" Rname="Yaser" 
                             Rcomment="I loved it its indoor which is perfect during summer vacation and the games and pretty good ." />
                            <Reviews id="review2" Rname="Yousef" 
                             Rcomment=" The waiting que is very long specially if you come after evening." />
                            <Reviews id="review3" Rname="Mohammed" 
                            Rcomment="There are multiple otions for all kids, teens and adults and varity of food options" />
                            <Reviews id="review4" Rname="Ahmed"   
                            Rcomment=" i loved it alot, but didnt like the fact that we could use discount cards in the counter, but not online." />
                        </div>
                </div>
           </section>
            <Footer/>
        </>
    )
    }
    
    export default Placedescription;