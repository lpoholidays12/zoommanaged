import Navbar from "../../../components/Navbar";
import "./Brochure.css"
// import brochureF from "../../../../public/images/Brochure/brochureF.jpg";



// const imagePaths = [
//     "/images/brochureF.jpg",
//     "/images/brochureB.jpg",
//     "/images/japan.jpg",
//     "/images/vietnam.jpg",
//     "/images/turkey1.jpg",
//     "/images/northernNights.jpg"
//   ];

export default function Brochure(){
   
        return (
            <>
            <Navbar />
            <div className="parentDiv1">
            <div className="parentDiv">
                <img src="/images/brochureF.jpg"  alt="brochure" className="childDiv" />
                <img src="/images/brochureB.jpg"  alt="brochure"  className="childDiv" />
            </div>
            <div className="parentDiv">
                <img src="/images/japan.jpg"  alt="brochure"  className="childDiv" />
                <img src="/images/vietnam.jpg"  alt="brochure" className="childDiv" />
            </div>
            <div className="parentDiv">
                <img src="/images/turkey1.jpg"  alt="brochure"  className="childDiv" />
                <img src="/images/northernNights.jpg"  alt="brochure" className="childDiv" />
            </div>
            </div>
          
            </>
        )
}