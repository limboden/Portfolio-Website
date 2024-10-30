


const style = {
  label: {
    width: '70px',
    textAlign: 'right',
    marginRight: '5px'
  }
}

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form action="">
        <label style={style.label} htmlFor="name">Name: </label>
        <input id="name" type="text" required />
        <br />
        <label style={style.label} htmlFor="email">Email: </label>
        <input id="email" type="email" required />
        <br />
        <label style={style.label} htmlFor="message">Message: </label>
        <input id="message" type="textarea" required />
      </form>

    </div>
  );
}
