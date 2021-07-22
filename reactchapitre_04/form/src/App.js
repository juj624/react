import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      isValidEmail: false,
      isValidPassword: false,
      isFormSubmitted: false,

    }

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)

  }
  onEmailChange(e) {
    this.setState({ email: e.target.value })
    const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email_validator_regex.test(e.target.value)) {
      this.setState({ isValidEmail: true })
    } else {
      this.setState({ isValidEmail: false })
    }
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value })
    if (e.target.value.length >= 6) {
      this.setState({ isValidPassword: true })
    } else {
      this.setState({ isValidPassword: false })
    }
  }

  handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.isEmailValid && this.state.isPasswordValid) {
			this.setState((prevState) => {
				return {
					...prevState,
					isFormSubmitted: true,
				};
			});
		}
	};

  render() {

    return (
      <form>
        <div className="form-group row d-flex p-2 bd-highlight d-flex justify-content-center">
          <div className="col-sm-12">
            <label for="inputEmail" className="col-sm-12 col-form-label">Email</label>
            <input type="text" className={this.state.isValidEmail ? "is-valid form-control" : "is-invalid form-control"} id="inputEmail" placeholder="julienpenot@outook.com" value={this.state.email} onChange={this.onEmailChange} />
          </div>
        </div>
        <div className="form-group row d-flex p-2 bd-highlight d-flex justify-content-center">
          <div className="col-sm-12">
            <label for="inputPassword" className="col-sm-12 col-form-label">Password</label>
            <input type="password" className={this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
            <input type="checkbox" name="conditions" value="ok" />
            Remember me !
          </div>
        </div>
        <button className={this.state.isFormSubmitted}
        onSubmit={this.handleSubmit}  type="submit">Submit form</button>
      </form>
    );
  }




}

export default App;