






export default function ProjectCard(props) {

  const cardStyle = {
    card: {
      flex: '1 0 100px',
      maxWidth: '300px',
      minHeight: '400px',
      minWidth: '200px',
      padding: '10px',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: '1px',
      margin: '5px',
      borderRadius: '15px',
      backgroundColor: props.backgroundColor,
      color: props.textColor
    },

    // link: {
    //   color: 'magenta'
    // }
  }

  return (
    <section style={cardStyle.card}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a style={cardStyle.link} rel="noreferrer" target="_blank" href={props.link}>Link deployed site</a>
      <br />
      <a style={cardStyle.link} rel="noreferrer" target="_blank" href={props.repo}>Link to GitHub repository</a>

    </section>
  );
}