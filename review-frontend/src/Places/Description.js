import  './Places.css';

function Description(props){
    return(
        <>
            <h1>{props.desthead}</h1>
            <hr/>
            <div id="makeflex">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vaZPNWZU3jM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>{props.Description}</p>
            </div><br/>
            <h1>Reviews</h1>
            <div class="reviews">
                   
            </div>
            
            </>
    )
    }
    
    export default Description;