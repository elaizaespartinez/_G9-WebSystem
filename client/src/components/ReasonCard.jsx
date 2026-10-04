function ReasonCard ({ reason, lastUpdated }) {
    return (
        <div>
            <p>{reason}</p>
            <p>Last updated: {lastUpdated}</p>
        </div>
    )
}

export default ReasonCard;