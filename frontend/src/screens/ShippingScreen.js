import {getUserInfo, getShipping, setShipping} from '../localStorage'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = {
  after_render: () => {
    document
      .getElementById('shopping-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault()
        setShipping({
          address: document.getElementById('address').value,
          city: document.getElementById('city').value,
          postalCode: document.getElementById('postalCode').value,
          country: document.getElementById('country').value,
        })
        document.location.hash = '/payment'
      })
  },
  render: () => {
    const {name} = getUserInfo()
    if (!name) {
      document.location.hash = '/'
    }
    const {address, city, postalCode, country} = getShipping()
    return `
    ${CheckoutSteps.render({
      step1: true,
      step2: true,
    })}
			<div class="form-container">
				<form id="shopping-form">
					<ul class="form-items">
						<li><h1>Shipping</h1></li>
						<li>
							<label for="address">Address</label>
							<input id="address" name="address" type="text" value="${address}"/>
						</li>
						<li>
							<label for="city">City</label>
							<input id="city" name="city" type="text" value="${city}"/>
						</li>
						<li>
							<label for="postalCode">Postal Code</label>
							<input id="postalCode" name="postalCode" type="text" value="${postalCode}"/>
						</li>
						<li>
							<label for="country">Country</label>
							<input id="country" name="country" type="text" value="${country}"/>
						</li>
						<li><button type="submit" class="primary">Continue</button></li>
					</ul>
				</form>
			</div>
		`
  },
}

export default ShippingScreen
