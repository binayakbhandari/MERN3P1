import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <a to="#">MyWebsite</a>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Welcome to MyWebsite</h1>
                    <p>Your solution to awesome web designs.</p>
                    <a to="#about" className="btn">Learn More</a>
                </div>
            </section>
        </>
    )
}

export default Home