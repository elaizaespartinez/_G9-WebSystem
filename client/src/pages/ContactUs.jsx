function ContactUs(){
    return (
        <main>
            <header>
                <h1>Contact Us</h1>
            </header>

            <section>
                <div>
                    <form>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required className="border"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required className="border"/>
                        </div>
                        <div>
                            <label htmlFor="number">Contact Number</label>
                            <input type="text" id="number" name="number" required className="border"/>
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" required className="border"/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required className="border"></textarea>
                        </div>
                    </form>
                    <button type="submit" className="border">Send Message</button>
                </div>
            </section>
        </main>

    )
}

export default ContactUs;