import { Sun } from 'lucide-react';

export default function NavBar() {
    return (
        <nav>

            <h2 id="heading">Mr. Aleem</h2>

            <ul id="nav-list">
                <li className="nav-link"><a href="#home">Home</a></li>
                <li className="nav-link"><a href="#about">About</a></li>
                <li className="nav-link"><a href="https://drive.google.com/file/d/1se-JWvPZ1ft8JcrQ4MVyDmkLZo65dbIh/view?usp=sharing" target="_blank">Resume</a></li>
                <li className="nav-link"><a href="#skills">Skills</a></li>
                <li className="nav-link"><a href="#projects">Projects</a></li>
                <li className="nav-link"><a href="#contact">Contact</a></li>
            </ul>

            <div id="navbar-buttons">
                <button className="btn-icon" aria-label="Theme Selection">
                    <Sun size={18} color="#ffffff" strokeWidth={2.5} />
                </button>

                <a href="#contact">
                    <button className="btn-primary">
                        Get In Touch
                    </button>
                </a>
            </div>
        </nav>
    )
};