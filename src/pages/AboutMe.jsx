
const styles = {
  photo: {
    maxHeight: '150px'
  }
}




export default function AboutMe() {
  return (
    <div>
      <h1>About Me Page</h1>
      <p>
        Hi there! My name is Lukas, and I am a Full Stack Software Engineer!
      </p>
      <img style={styles.photo} src="src\assets\Lukas-photo.jpeg" alt="Photo of Lukas Imboden" />
    </div>
  );
}
