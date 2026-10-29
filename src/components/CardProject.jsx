export default function CardProject(props) {
    return (
        <div className="project-card">
            <img src={image} alt={title} />

            <h3>{title}</h3>

            <p>{description}</p>

            <h4>
                View <a href={liveLink} target="_blank" rel="noreferrer">online</a>
            </h4>

            <h4>
                View on <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
            </h4>
        </div>
    );

}
