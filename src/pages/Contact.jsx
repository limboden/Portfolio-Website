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
      <form id="contactForm" class="form-group">
        <div class="form-group">
          <label style={style.label} for="name"><span class="text-danger"></span>Name: </label>
          <input id="name" class="form-control" type="text" required />
          <br />
          <label style={style.label} for="email">Email: </label>
          <input id="email" class="form-control" type="email" required />
          <br />
          <label style={style.label} for="message">Message: </label>
          <input id="message" class="form-control" type="textarea" required />
        </div>
        <button type="submit" class="btn btn-primary" ></button>

      </form>

    </div>
  );
}
