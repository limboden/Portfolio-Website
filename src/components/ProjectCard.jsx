






export default function ProjectCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a rel="noreferrer" target="_blank" href={props.link}>Link deployed site</a>
      <br />
      <a rel="noreferrer" target="_blank" href={props.repo}>Link to GitHub repository</a>

    </div>
  );
}