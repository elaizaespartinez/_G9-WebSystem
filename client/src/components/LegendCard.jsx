function LegendCard({variant, label}){

     const variants = {
        high: "bg-risk-high",
        moderate: "bg-risk-moderate",
        low: "bg-risk-low",
        safe: "bg-safe",
    }

    return (
       <div>
        <div className={`h-2 w-2 ${variants[variant]}`}></div>
        <h3>{label}</h3>
       </div>
    )
}

export default LegendCard;