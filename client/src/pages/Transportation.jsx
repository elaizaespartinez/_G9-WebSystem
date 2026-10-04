import LegendCard from "../components/LegendCard";
import { BusFront} from "lucide-react";
import RouteStatusCard from "../components/RouteStatusCard";
import ReasonCard from "../components/ReasonCard";

function Transportation() {
    return (
        <main>
            <section>
                <div>
                    {/* leaflet map */}
                </div>
                <div>
                    <header>
                        <h2>Legend</h2>
                    </header>
                    <div>
                        <LegendCard variant="high" label="Suspended" />
                        <LegendCard variant="low" label="Affected" />
                        <LegendCard variant="safe" label="Safe" />
                    </div>

                </div>
            </section>

            <section>
                <article>
                    <header>
                        <h2>Transport Guide</h2>
                        <BusFront />
                    </header>
                    <div>
                        <label htmlFor="origin">Origin:</label>
                        <select id="origin" className="border">
                            <option value="location1">Location 1</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                        </select>

                        <label htmlFor="destination">Destination:</label>
                        <select id="destination " className="border">
                            <option value="location1">Location 1</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                        </select>

                    </div>

                    <div>
                        <button className="border">Get Directions</button>
                    </div>
                </article>

                <article>
                    <header>
                        <h2>Available Routes</h2>
                        <select id="routes" className="border">
                            <option value="">Get directions first</option>
                        </select>
                    </header>

                    <div>
                        <p>Route Status</p>
                        <RouteStatusCard variant="moderate" />
                    </div>

                    <div>
                        <p>Reason</p>
                        <ReasonCard reason="Flooding near BatStateU - PB" lastUpdated="2026-09-26 04:30PM" />

                    </div>
                </article>
            </section>
        </main>
    )
}

export default Transportation;