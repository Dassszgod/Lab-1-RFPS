import "../styles/style.css";

function ServiceCard({ cardData }) {

    return (
        <article className="service-card">
            <div className="flip-container">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src={cardData.picture} alt={cardData.title}/>
                    </div>
                    <div className="flip-back">
                        <p><b>{cardData.backTitle}:</b> {cardData.conditions}</p>
                    </div>
                </div>
            </div>

            <h3>{cardData.title}</h3>
            <ul>
                {cardData.list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default ServiceCard;