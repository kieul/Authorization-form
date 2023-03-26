import React from "react";
import ReactDOM from "react-dom";

// the password is: swordfish
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "password",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>kieu.thuy.linh1@gmail.com</li>
        <a href="https://www.linkedin.com/in/linh-kieu/">LinkedIn</a>
        <li>Let's connect!</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("app"));
