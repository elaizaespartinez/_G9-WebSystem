export const floodMapConfig = {
    center: [12.8797, 121.774],
    zoom: 6,
    minZoom: 5,
    maxZoom: 18,
    maxBounds: [
        [4.2, 116.5],
        [21.5, 127.5],
    ],
    // OSM public tiles are for light use. Move this URL to a hosted provider such as MapTiler for real traffic.
    tileUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileAttribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors</a>',
    hazardDataPath: "/data/batangas-flood-hazard.sample.geojson",
};

export const hazardStyles = {
    low: { color: "#339900", fillColor: "#9bdd72" },
    medium: { color: "#cc8400", fillColor: "#ffcc00" },
    high: { color: "#c40000", fillColor: "#ff5b5b" },
};

export function getHazardStyle(feature) {
    const level = String(feature?.properties?.hazard_level || "low").toLowerCase();
    return {
        ...hazardStyles[level] || hazardStyles.low,
        fillOpacity: 0.45,
        opacity: 0.9,
        weight: 2,
    };
}