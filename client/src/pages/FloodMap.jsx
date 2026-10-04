import {Link} from "react-router-dom";
import StatCard from "../components/StatCard";
import LegendCard from "../components/LegendCard";

function FloodMap() {
    return (
        <main>
            <section>
                <div>
                    {/* leaflet map */}
                    
                </div>
                <div>
                    <div>
                        <StatCard variant="high" title="Evacuate" value="1" />
                        <StatCard variant="moderate" title="Alert" value="1" />
                        <StatCard variant="low" title="Monitor" value="1" />
                        <StatCard variant="safe" title="Normal" value="1" />
                    </div>

                    <article>
                        <header>
                            <h2>Brgy. Sta. Rita</h2>
                            <div>Evacuate</div>
                        </header>
                        <div>
                            <p>Rainfall: 34mm/hr</p>
                            <p>River: 84%</p>
                            <p>Hazard: High</p>
                            <p>Sta. Rita Multipurpose Hall</p>
                            <Link to="/flood-map">Safe Route</Link>
                        </div>
                
                    </article>
                </div>
            </section>

            <section>
                <header>
                    <h2>Legend</h2>
                </header>

                <div>
                    <LegendCard variant="high" label="High" />
                    <LegendCard variant="moderate" label="Moderate" />
                    <LegendCard variant="low" label="Low" />
                    <LegendCard variant="safe" label="Safe" />
                </div>
            </section>

        </main>
    )
}

export default FloodMap;