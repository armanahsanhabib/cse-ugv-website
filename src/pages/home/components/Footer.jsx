import LOGO from "../../../images/logo-wh.png";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo_area">
                    <img src={LOGO} alt="logo" />
                    <p><i className="fa-light fa-copyright"></i> Ahsan Habib</p>
                    <p>Unofficial Web Portal of CSE Dept.</p>
                    <h3>Developed and maintained by <a href="https://armanahsanhabib.com/">Ahsan Habib</a> </h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 