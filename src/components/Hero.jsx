import { Download, ArrowRight, Code2, Braces, Database } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home">

            <div id="home-left" className="home-fragment">

                <div id="hero-badge">
                    <Code2 size={14} />
                    <span>Available for freelance work</span>
                </div>

                <h2 id="heading-hero-left">
                    <span id="span-hi">Hi, </span>I'm{" "}
                    <span id="span-name">Aleem Ahmad</span>
                </h2>

                <p id="hero-role">
                    <span id="profession">Full-Stack Engineer</span>
                    {" & "}<span id="profession">AI Automation Expert</span>
                </p>

                <p id="heading-para">
                    I build modern, scalable web applications and automate complex workflows
                    using cutting-edge technologies. Turning ideas into powerful digital experiences.
                </p>

                <div id="hero-stats">
                    <div className="hero-stat">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Years Exp.</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="hero-stat">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Projects Done</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="hero-stat">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                </div>

                <div id="hero-tech-stack">
                    <span className="tech-tag"><Braces size={12} /> React</span>
                    <span className="tech-tag"><Code2 size={12} /> Next.js</span>
                    <span className="tech-tag"><Database size={12} /> PostgreSQL</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">n8n</span>
                </div>

                <div id="hero-cta">
                    <a href="#projects" id="cta-primary">
                        View My Work <ArrowRight size={16} />
                    </a>
                    <a href="https://drive.google.com/file/d/1se-JWvPZ1ft8JcrQ4MVyDmkLZo65dbIh/view?usp=sharing"
                        target="_blank" id="cta-secondary">
                        <Download size={16} /> Download CV
                    </a>
                </div>

                <div id="hero-socials">
                    {/* GitHub */}
                    <a href="https://github.com" target="_blank" aria-label="GitHub" className="social-icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="social-icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    {/* Twitter / X */}
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="social-icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.258 5.63 5.907-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>

            </div>

            <div id="home-right" className="home-fragment">
                <div id="hero-img-wrapper">
                    <div id="hero-img-glow"></div>
                    <img src="src/assets/aleem.png" alt="Aleem Ahmad - Full Stack Developer" />
                    <div id="hero-badge-floating">
                        <Code2 size={16} color="#4f46e5" />
                        <div>
                            <span className="badge-title">Full-Stack Dev</span>
                            <span className="badge-sub">React · Node · SQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}