export default function CardProject(props) {
    return (
        <div className="project-card">
            <img src={props.image} alt={props.title} />

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <h4>
                View <a href={props.liveLink} target="_blank" rel="noreferrer">online</a>
            </h4>

            <h4>
                View on <a href={props.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            </h4>
        </div>
    );

}
