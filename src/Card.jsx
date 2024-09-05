import './Card.css'

function Card(props){
    return(
        <>
        <div className="card" style={{backgroundColor:''}}>
            <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="Card Image" className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">Card Title</h2>
                    <h3 className="card-subtitle">Card Subtitle</h3>
                    <p className="card-description">This is a brief description of the card. It gives more details about the content presented on the card.</p>
                    <button className="card-button">Learn More</button>
                </div>
        </div>
        </>
   )
}

export default Card