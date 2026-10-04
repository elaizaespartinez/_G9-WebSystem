import logo from "../assets/agos_logo.png";

function Footer(){
    return(
        <footer>
            <div className="w-48">
                <img src={logo} alt="AGOS Logo" className="w-full h-auto"/>
                <p>ABISO AT GABAY SA ORAS NG SAKUNA</p>
            </div>

            <div>
                <p>© 2026 AGOS. Abiso at Gabay sa Oras ng Sakuna. All rights reserved.</p>
            </div>
        </footer>
    )

}

export default Footer;