import {Link} from "react-router-dom";

function ServiceCard({ icon, title, description, to }) {

  const isAnchor = to.startsWith("#");
  
  return (
    <article>
        <div>
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>

        {isAnchor ? (
                <a href={to}>View</a>
            ) : (
                <Link to={to}>View</Link>
            )}
        {/* <Link to={to}>View</Link> */}
    </article>
  );
}

export default ServiceCard;