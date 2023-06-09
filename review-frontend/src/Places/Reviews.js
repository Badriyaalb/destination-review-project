import './Places.css';

function Reviews(props)
{
    return(
        <div class="testimonial-box">
        {/* <!--top-------------------------> */}
        <div class="box-top">
            {/* <!--profile-----> */}
            <div class="profile">
                {/* <!--name-and-username--> */}
                <div class="name-user">
                    <h3>{props.Rname}</h3> 
                </div>
            </div>
            {/* <!--reviews------> */}
            <div class="reviews">
                <i className={props.Rate1}></i>
                <i className={props.Rate2}></i>
                <i className={props.Rate3}></i>
                <i className={props.Rate4}></i>
                <i className={props.Rate5}></i>    {/*<!--Empty star--> */}
                
            </div>
        </div>
        {/* <!--Comments----------------------------------------> */}
        <div class="client-comment">
            <p id="CommentDD">{props.Rcomment}</p>
        </div>
    </div>


        );
    }
   
    
    export default Reviews;