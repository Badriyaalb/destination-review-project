import  './placedescription.css';
import Description from './Description';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reviews from './Reviews';

function Placedescription(){
    return(
        <>
            <Header/>
            <Description desthead='IMG World' Description=''/>
            <div>
                <div id="Reviewsgridbox">
                    <Reviews Rname="Asmaa" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
                    <Reviews Rname="Aisha" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
                    <Reviews Rname="Ahmed" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
                    <Reviews Rname="Ali" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
                </div>
           </div>
            <Footer/>
        </>
    )
    }
    
    export default Placedescription;