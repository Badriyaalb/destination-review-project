import './Attractionlist.css';

function Attractionlist(props){
    return(
        
        <div id="placelistdiv">
            <img src={props.placeimg} id="placeimg"/>
            <section>
                <h1 id="placename">{props.placename}</h1>
                <nav id="placeheadings">
                    <a className="placeheadings">Location</a>
                    <a className="placeheadings">Ticket(AED)</a>
                    <a className="placeheadings">Access Days</a>
                    <a className="placeheadings">Rating</a>
                </nav>
                <div id="placedetails">
                    <a className="placedetails">{props.location}</a>
                    <a className="placedetails">{props.ticket}</a>
                    <a className="placedetails">{props.day}</a>
                    <a className="placedetails">{props.rating}</a>

                </div>
            </section>
        </div>

    )
}
export default Attractionlist;