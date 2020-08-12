import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Error404Screen from './screens/Error404Screen'
import CartScreen from './screens/CartScreen'
import {parseRequestUrl, showLoading, hideLoading} from './utils'
import SigninScreen from './screens/SigninScreen'
import Header from './components/Header'
import RegisterScreen from './screens/RegisterScreen'

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen,
  '/signin': SigninScreen,
  '/register': RegisterScreen,
}

const router = async () => {
  showLoading()
  const request = parseRequestUrl()
  const parsedUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '')
  const screen = routes[parsedUrl] ? routes[parsedUrl] : Error404Screen

  const header = document.getElementById('header-container')
  header.innerHTML = await Header.render()
  await Header.after_render()

  const main = document.getElementById('main_container')
  main.innerHTML = await screen.render()
  await screen.after_render()

  hideLoading()
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
