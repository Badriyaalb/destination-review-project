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
                <Description desthead='IMG World' Description='The Ilyas & Mustafa Galadari Group (IMG Group) is a highly regarded, diversified commercial entity based in Dubai.The Group is carrying on the tradition of the Galadari family which has a long history of entrepreneurship dating from the 1940′s. The business portfolio includes construction, real estate development, leisure and entertainment, hospitality, automobiles, international brand representation and franchising, food storage, luxury boat distribution, design, manufacturing and transport. Over the years, the Group has shown ambition and determination in growing and launching new business enterprises with acclaimed international success and rewards.'/>
                <div>
                        <div id="Reviewsgridbox">
                            <Reviews id="review1" Rname="Yaser" Rcomment="I loved it its indoor which is perfect during summer vacation and the games and pretty good ." />
                            <Reviews id="review2" Rname="Yousef"  Rcomment=" The waiting que is very long specially if you come after evening." />
                            <Reviews id="review3" Rname="Mohammed"  Rcomment="There are multiple otions for all kids, teens and adults and varity of food options" />
                            <Reviews id="review4" Rname="Ahmed"   Rcomment=" i loved it alot, but didnt like the fact that we could use discount cards in the counter, but not online." />
                        </div>
                </div>
           </section>
            <Footer/>
        </>
    )
    }
    
    export default Placedescription;