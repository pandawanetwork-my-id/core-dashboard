import pkg from 'packagejson'
import { component, register } from 'riot'
import pagesModule from 'appModule/pages'
import kebabCase from 'lodash.kebabcase'
import layoutModule, { layoutComponents } from 'layoutModule'
import tagModule, { tagComponents } from 'components/components.index'
import MainLayout from './layouts/main-layout.riot'
import routes from './routes'
import { formatNumber, parseRequestURL, logInfo, setFavicon } from './helpers/utilities.js'
import { getStorage, deleteStorage } from 'helpers/storage'
import { goTo } from 'helpers/ma'
import 'theme/scss/bracket.scss'
/* plugins app */
import 'services/app-plugins.js'

const guestRoutes = ['register', 'login']

const version = pkg.version

window.formatNumber = formatNumber
window.App = {
    version,
    nodeEnv : import.meta.env.NODE_ENV || 'development',
    baseApiUrl: import.meta.env.BASE_API_URL,
    webPrefixURL: import.meta.env.DASHBOARD_PREFIX_URL,
    currentUrl : '/',
    currentHash: ''
}

const needLogin = (route) => {
    if (guestRoutes.indexOf(route) < 0) {
        return isLogin() ? false : true
    } else {
        return false
    }
}

const isLogin = () => {
    return getStorage('API_TOKEN', '') ? true : false
    // return true
}

const initApp = () => {
    /* register all components */
    routes.forEach((item) => {
        logInfo(`Registering Route: ${item.hash} => ${item.component}`)
        register(kebabCase(item.hash), pagesModule(item.component))
    })

    layoutComponents.forEach((component) => {
        logInfo('Registering Layout:', component, kebabCase(component))
        register(kebabCase(component), layoutModule(component))
    })

    tagComponents.forEach((item) => {
        logInfo('Registering Global Components', item)
        register(kebabCase(item), tagModule(item))
    })

}

const router = (e) => {
    logInfo('App URL Changed')
    App.currentUrl = location.href
    const request = parseRequestURL()
    const { pathName } = request
    /* logout */
    if(pathName === 'logout') {
        deleteStorage('API_TOKEN')
        goTo('login')
    }

    const namedRoutes = routes.map(x => {
        if (!x.name) x.name = kebabCase(x.hash)
        return x
    })
    let routeHash = namedRoutes.findIndex(item => {
        return item.name === kebabCase(pathName)
    })

    if (!isLogin()) goTo('login')

    let authPage = needLogin(pathName)
    const objRoute = namedRoutes[routeHash] || {menu: true}
    const pUrl = kebabCase(pathName)
    logInfo({pathName, routeHash, pUrl, authPage, objRoute})
    if(routeHash >= 0) {
        if(!authPage) {
            appComponent.setModuleActive(pUrl, objRoute.menu)
        }else {
            goTo('logout')
        }
    } else {
        if (pathName === 'login') {
            appComponent.setModuleActive(pUrl, false)
        } else {
            appComponent.setModuleActive('not-found', true)
        }
    }

}

initApp()
const appComponent = component(MainLayout)(document.getElementById('page'))
window.cekData = appComponent
window.addEventListener('hashchange', router)
window.addEventListener('load', router)