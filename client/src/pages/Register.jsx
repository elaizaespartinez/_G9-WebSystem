import logo from "../assets/agos_logo.png";
import {Link} from "react-router-dom";

function Register (){
    return (
        <main>
            <section>
                <img src={logo} alt="AGOS Logo" className="w-50 h-32" />
            </section>
            
            <section>

                <h1>Register an account</h1>
                <form>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required className="border"/>
                    </div>
                     <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" required className="border"/>
                    </div>
                     <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required className="border"/>
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required className="border"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required className="border"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required className="border"/>
                    </div>
                    <button type="submit" className="border">Register </button>
                </form>

                <p>
                    Already have an account?
                    <Link to="/login">Log in</Link>
                </p>

            </section>

        </main>
    )
}

export default Register;