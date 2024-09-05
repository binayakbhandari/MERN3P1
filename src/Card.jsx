import './Card.css'

function Card(props){
    return(
        <>
        <div className="card" style={{backgroundColor:''}}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/055/999/small_2x/funny-goat-smile-generative-ai-photo.jpg" alt="Card Image" className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">Dashain Offer</h2>
                    <h3 className="card-subtitle">Grab the Chance to Win a Khasi in Our Dashain Offer!</h3>
                    <p className="card-description">We're offering a special Dashain deal on our courses at an unbeatable price of just Rs. 35K! Plus, you'll have a chance to win an exciting prize—a big Khasi weighing around 5 KG!</p>
                    <button className="card-button">Learn More</button>
                </div>
        </div>
        </>
   )
}

export default Card