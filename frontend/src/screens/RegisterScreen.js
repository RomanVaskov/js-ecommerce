import {register} from '../api'
import {setUserInfo, getUserInfo} from '../localStorage'
import {hideLoading, showLoading, showMessage, redirectUser} from '../utils'

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById('register-form')
      .addEventListener('submit', async (e) => {
        showLoading()
        e.preventDefault()
        const data = await register({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        })
        hideLoading()
        if (data.error) {
          showMessage(data.error)
        } else {
          setUserInfo(data)
          redirectUser()
        }
      })
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser()
    }
    return `
			<div class="form-container">
				<form id="register-form">
					<ul class="form-items">
						<li><h1>Create Account</h1></li>
						<li>
							<label for="name">Name</label>
							<input id="name" name="name" type="name"/>
						</li>
						<li>
							<label for="email">Email</label>
							<input id="email" name="email" type="email"/>
						</li>
						<li>
							<label for="password">Password</label>
							<input id="password" name="password" type="password"/>
						</li>
						<li>
							<label for="repassword">Re-Enter Password</label>
							<input id="repassword" name="repassword" type="password"/>
						</li>
						<li><button type="submit" class="primary">Register</button></li>
						<li><div>Already have an account? <a href="/#/signin">Sign-In</a></div></li>
					</ul>
				</form>
			</div>
		`
  },
}

export default RegisterScreen
