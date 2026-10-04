function StatCard({variant, title, value}) {

    const variants = {
        high: "bg-risk-high",
        moderate: "bg-risk-moderate",
        low: "bg-risk-low",
        safe: "bg-safe",
    }
    return (
        <div>
            <div className={`h-2 w-2 ${variants[variant]}`}></div>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default StatCard;