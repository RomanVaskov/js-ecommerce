import {update} from '../api'
import {setUserInfo, getUserInfo, clearUser} from '../localStorage'
import {hideLoading, showLoading, showMessage} from '../utils'

const ProfileScreen = {
  after_render: () => {
    document.getElementById('signout-button').addEventListener('click', () => {
      clearUser()
      document.location.hash = '/'
    })
    document
      .getElementById('profile-form')
      .addEventListener('submit', async (e) => {
        showLoading()
        e.preventDefault()
        const data = await update({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        })
        hideLoading()
        if (data.error) {
          showMessage(data.error)
        } else {
          setUserInfo(data)
          document.location.hash = '/'
        }
      })
  },
  render: () => {
    const {name, email} = getUserInfo()
    if (!name) {
      document.location.hash = '/'
    }
    return `
			<div class="form-container">
				<form id="profile-form">
					<ul class="form-items">
						<li><h1>User Profile</h1></li>
						<li>
							<label for="name">Name</label>
							<input id="name" name="name" type="name" value="${name}"/>
						</li>
						<li>
							<label for="email">Email</label>
							<input id="email" name="email" type="email" value="${email}"/>
						</li>
						<li>
							<label for="password">Password</label>
							<input id="password" name="password" type="password"/>
						</li>
						<li><button type="submit" class="primary">Update</button></li>
						<li><button type="button" id="signout-button">Sign Out</button></li>
					</ul>
				</form>
			</div>
		`
  },
}

export default ProfileScreen
