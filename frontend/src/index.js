import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Error404Screen from './screens/Error404Screen'
import CartScreen from './screens/CartScreen'
import {parseRequestUrl} from './utils'

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen,
}

const router = async () => {
  const request = parseRequestUrl()
  const parsedUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '')
  const screen = routes[parsedUrl] ? routes[parsedUrl] : Error404Screen
  const main = document.getElementById('main_container')
  main.innerHTML = await screen.render()
  await screen.after_render()
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
