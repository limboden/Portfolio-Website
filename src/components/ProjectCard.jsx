






export default function ProjectCard(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a rel="noreferrer" target="_blank" href={props.link}>Link deployed site</a>
      <br />
      <a rel="noreferrer" target="_blank" href={props.repo}>Link to GitHub repository</a>

    </div>
  );
}