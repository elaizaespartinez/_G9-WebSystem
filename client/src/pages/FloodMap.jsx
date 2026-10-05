import {Link} from "react-router-dom";
import StatCard from "../components/StatCard";
import LegendCard from "../components/LegendCard";
import FloodMapLeaflet from "../components/FloodMapLeaflet";

function FloodMap() {
    return (
        <main className="mx-auto max-w-[var(--container-agos)] px-4 py-6">
            <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="h-[min(70vh,38rem)] min-h-[28rem]">
                    <FloodMapLeaflet />
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <StatCard variant="high" title="Evacuate" value="1" />
                        <StatCard variant="moderate" title="Alert" value="1" />
                        <StatCard variant="low" title="Monitor" value="1" />
                        <StatCard variant="safe" title="Normal" value="1" />
                    </div>

                    <article className="rounded-xl bg-card p-4 shadow-card">
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

            <section className="mt-6 rounded-xl bg-card p-4 shadow-card">
                <header>
                    <h2>Legend</h2>
                </header>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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