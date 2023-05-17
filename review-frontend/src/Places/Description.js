import  './Places.css';

function Description(props){
    return(
        <>
            <h1 id="destheadDD">{props.desthead}</h1>
            <hr/>
            
                <div id="makeflex">
                 
                 <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dHT-8FlUj9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  
                    <div>
                         <h1 id="PlaceAbout"> About The 
                            Place</h1>
                        <p id="description555">{props.Description}</p>
                    </div>
                </div>
             <h1 id="reviews6666"> What our clients Say</h1> <button onclick="" id="AddCommentDD"> Add Comment</button>
            </>
    )
    }
    
    export default Description;