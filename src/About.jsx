import './about.css'

function About() {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h1>About Me</h1>
                            <p>
                                Hi, I'm Binayak Bhandari, a passionate web developer with a love for the MERN stack. I create clean, modern,
                                and user-friendly websites. I have a solid foundation in JavaScript, React, Node.js, and am currently
                                exploring the latest web technologies.
                            </p>
                            <p>
                                I thrive in dynamic environments where learning and growth are constant. I'm also passionate about
                                working on collaborative projects and turning innovative ideas into reality.
                            </p>
                            <a href="#contact" className="btn">Contact Me</a>
                        </div>
                        <div className="about-image">
                            {/* <img src="https://via.placeholder.com/400" alt="About Me Image"> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About