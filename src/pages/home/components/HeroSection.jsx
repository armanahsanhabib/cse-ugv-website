import COVERPIC from "../../../images/hero-image.png";
import "../css/hero-section.css";

const HeroSection = () => {
    return (
        <div className="hero_section">
            <div className="container">
                <div className="text_area">
                    <span className="thanks">Thanks for visiting</span>
                    <h1>CSE Web Portal</h1>
                    <h3>Department of CSE - University of Global Village, Barishal</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, distinctio omnis veritatis error voluptates enim vitae recusandae officia ducimus ullam!</p>
                    <div className="btn_primary">Register</div>
                </div>
                <div className="img_area">
                    <img src={COVERPIC} alt="Cover Pic" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection; 