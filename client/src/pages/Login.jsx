import logo from "../assets/agos_logo.png";

function Login(){
    return (
        <main>
            <section>
                <header>
                    <img src={logo} alt="AGOS Logo" className="w-35 h-22" />
                </header>
                <h1>Login to your account</h1>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required className="border"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required className="border"/>
                    </div>
                    <button type="submit" className="border">Login</button>
                </form>
            </section>
        </main>
    )
}

export default Login;