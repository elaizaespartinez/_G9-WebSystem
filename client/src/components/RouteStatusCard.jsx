import redAlert from "../assets/alert-icons/red-alert.png";
import yellowAlert from "../assets/alert-icons/yellow-alert.png";
import greenAlert from "../assets/alert-icons/green-alert.png";

function RouteStatusCard ( {variant}){
    

    const variants = {
        high: {
            icon: redAlert,
            label: "Suspended"

        },
        moderate: {
            icon: yellowAlert,
            label: "Affected"
        },
        low: {
            icon: greenAlert,
            label: "Safe"
        }
    }
    return (

        <div>
            <div className={`h-5 w-5 ${variants[variant].label}`}>
                <img src={variants[variant].icon} alt={variants[variant].label} />
            </div>
                    
            <div>
                <h3>{variants[variant].label}</h3>
            </div>
        </div>
    )
}

export default RouteStatusCard;