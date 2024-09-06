import './Card.css'

function Card({image, title, subtitle, description, color, bgColor, buttonColor}){
    return(
        <>
        <div className="card" style={{backgroundColor:bgColor, color:color}}>
            <img src={image} alt="Card Image" className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="card-subtitle" style={{color:color}}>{subtitle}</h3>
                    <p className="card-description">{description}</p>
                    <button className="card-button" style={{background:buttonColor}}>Learn More</button>
                </div>
        </div>
        </>
   )
}

export default Card