import {signin} from '../api'
import {setUserInfo, getUserInfo} from '../localStorage'
import {hideLoading, showLoading, showMessage, redirectUser} from '../utils'

const SigninScreen = {
  after_render: () => {
    document
      .getElementById('signin-form')
      .addEventListener('submit', async (e) => {
        showLoading()
        e.preventDefault()
        const data = await signin({
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
				<form id="signin-form">
					<ul class="form-items">
						<li><h1>Sign-In</h1></li>
						<li>
							<label for="email">Email</label>
							<input id="email" name="email" type="email"/>
						</li>
						<li>
							<label for="password">Password</label>
							<input id="password" name="password" type="password"/>
						</li>
						<li><button type="submit" class="primary">Signin</button></li>
						<li><div>New User? <a href="/#/register">Create your account</a></div></li>
					</ul>
				</form>
			</div>
		`
  },
}

export default SigninScreen
