const style = {
  label: {
    width: '70px',
    textAlign: 'right',
    marginRight: '5px'
  },
  submitButton: {
    margin: '5px 0px',
  }
}




export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form id="contactForm" className="form-group">
        <div className="form-group">
          <label htmlFor="name"><span className="text-danger"></span>Name: </label>
          <input id="name" className="form-control" type="text" required />
          <label htmlFor="email">Email: </label>
          <input id="email" className="form-control" type="email" required />
          <label htmlFor="message">Message: </label>
          <textarea id="message" className="form-control" type="text" required />
        </div>
        <button style={style.submitButton} type="submit" className="btn btn-primary" >Submit!</button>

      </form>

    </div>
  );
}
