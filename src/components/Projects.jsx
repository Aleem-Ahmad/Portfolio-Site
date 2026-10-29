
import ProjectCard from "./projectCard";

import servify from "../assets/servify.png";
import oldPortfolio from "../assets/oldPortfolio.png";
import game from "../assets/game.png";
import contactForm from "../assets/contactForm.png";
import n8nRAG from "../assets/n8nRAG.png";

export default function Projects() {
    const projects = [
        {
            image: servify,
            title: "Servify",
            description:
                "A bilingual online service marketplace connecting local service providers with households and offices in Pakistan.",
            liveLink: "https://www.servify.space/",
            githubLink: "https://github.com/Aleem-Ahmad/servify",
        },
        {
            image: oldPortfolio,
            title: "Old Portfolio",
            description:
                "A personal portfolio website showcasing my earlier work and projects as a web developer.",
            liveLink:
                "https://aleem-ahmad.github.io/Aeem-Potfoio-Website/",
            githubLink:
                "https://github.com/Aleem-Ahmad/Aeem-Potfoio-Website",
        },
        {
            image: game,
            title: "Rock Paper Scissor",
            description:
                "A browser-based Rock, Paper, Scissors game built with vanilla JavaScript and score tracking.",
            liveLink:
                "https://aleem-ahmad.github.io/Rock-Paper-Scissor/",
            githubLink:
                "https://github.com/Aleem-Ahmad/Rock-Paper-Scissor",
        },
        {
            image: contactForm,
            title: "Contact Form",
            description:
                "A clean, responsive contact form with validation built using HTML, CSS and JavaScript.",
            liveLink:
                "https://aleem-ahmad.github.io/contact-form/",
            githubLink:
                "https://github.com/Aleem-Ahmad/contact-form",
        },
        {
            image: n8nRAG,
            title: "n8n-RAG-main",
            description:
                "A simple learning project built with n8n to understand the basics of Retrieval-Augmented Generation (RAG).",
            liveLink:
                "https://aleem-ahmad.github.io/n8n-RAG-main/",
            githubLink:
                "https://github.com/Aleem-Ahmad/n8n-RAG-main",
        },
        {
            image: n8nRAG,
            title: "n8n-RAG-main",
            description:
                "A simple learning project built with n8n to understand the basics of Retrieval-Augmented Generation (RAG).",
            liveLink:
                "https://aleem-ahmad.github.io/n8n-RAG-main/",
            githubLink:
                "https://github.com/Aleem-Ahmad/n8n-RAG-main",
        },
    ];

    return (
        <section id="projects">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                />
            ))}
        </section>
    );
}
