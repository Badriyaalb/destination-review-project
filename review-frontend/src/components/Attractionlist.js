import './Attractionlist.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function Attractionlist(props){
    const [allplaces, setallplaces]=useState();
    useEffect(()=>{ 

        axios.get("http://localhost:1440/getplaces").then((res)=>{setallplaces(res.data)},[]);
    }
    
    
    )

    return(

        <>
        {
            allplaces && allplaces.map((place)=>(
                <div id="placelistdiv">
            <img src={place.placeImage} id="placeimg"/>
            <section>
                <h1 id="placename">{place.placeName}</h1>
                <nav id="placeheadings">
                    <a className="placeheadings">Location</a>
                    <a className="placeheadings">Ticket(AED)</a>
                    <a className="placeheadings">Access Days</a>
                    <a className="placeheadings">Rating</a>
                </nav>
                <div id="placedetails">
                    <a className="placedetails">{place.placeLocation}</a>
                    <a className="placedetails2">{place.ticketPrice}</a>
                    <a className="placedetails3">{place.workingDays}</a>
                    <a className="placedetails5">{place.averageRating}</a>

                </div>
            </section>
        </div>
            ))
        }
        </>
        
        

       

    )
}
export default Attractionlist;