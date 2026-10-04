import greenRainfall from "../assets/rainfall-icons/green-rainfall.png";
import yellowRainfall from "../assets/rainfall-icons/yellow-rainfall.png";
import redRainfall from "../assets/rainfall-icons/red-rainfall.png";
import orangeRainfall from "../assets/rainfall-icons/orange-rainfall.png";

function Announcements() {
    return (
        <main>
            <header>
                <h1>Announcements</h1>
            </header>

            <article>
                <header>
                    <p>As of 10:00 AM · September 28, 2026</p>
                </header>

                <section>
                    <div> 
                        <img src={yellowRainfall} alt="" className="w-10 h-10"/>
                    </div>
                    <div>
                        <div>
                                <p>Weather Update</p>
                                <h2>Monitor Weather Conditions</h2>
                        </div>
                        <p>
                            7.5 to 15mm of rain per hour is expected to persist.
                            Flooding is possible in low-lying or poorly drained areas.
                        </p>
                        <p>
                            Light to moderate rain is being experienced in some areas
                            of Batangas City. Other areas are experiencing cloudy skies
                            to light rain.
                        </p>
                    </div>
                </section>

                <section>
                    <h3>River and Coastal Monitoring</h3>
                    <p>
                        Residents are advised to remain vigilant, monitor weather
                        and river updates, and follow the guidance of local authorities.
                    </p>
                </section>

                <section>
                    <h3>Advisory</h3>
                    <p>
                        Residents are advised to avoid affected areas and seek
                        alternative routes. Emergency services are on-site to
                        assist those affected.
                    </p>
                </section>
            </article>
        </main>
    )
}

export default Announcements;