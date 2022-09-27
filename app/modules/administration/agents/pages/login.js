import pkg from 'packagejson'
import { setParamApp, goTo } from 'helpers/ma'
import { encrypt } from 'helpers/security'
import { showAlertError, logError, logInfo, setFavicon } from 'helpers/utilities'
import { changeStorage } from 'helpers/storage'
import {
    cancelAllRequest
} from 'services/SDK/main'
import {
    LoginAgent,
} from 'appModule/administration/agents/agents.sdk'
// assets
import LoginLogo from 'theme/images/logo.png'
import LoginFavicon from 'theme/images/login-favicon.png'

export default {
    LoginLogo,
    onBeforeMount() {
        this.invalidDomains = []
        setFavicon(LoginFavicon)
    },
    onBeforeUnmount() {
        cancelAllRequest()
    },
    onMounted(props) {
        this.version_app = pkg.version;
        setParamApp({ currentComponent: 'login' })
        this.update()
    },
    doLogin(e) {
        if (e && e.preventDefault) e.preventDefault()
        const username = this.$('input[name=username]').value
        logInfo('Try Login With Username:', username)
        encrypt(this.$('input[name=password]').value)
            .then((password) => {
                LoginAgent({username, password})
                    .then((response)=>{
                        try {
                            let data = response.data;
                            changeStorage({'API_TOKEN': data.token}, '')
                            changeStorage({'USERNAME': username}, '')
                            let urlMenu = 'summary'
                            goTo(urlMenu)
                        } catch (err){
                            logError(err)
                        }
                    })
                    .catch((err)=>{
                        logError(err)
                        showAlertError(err)
                    })
            })
    },
    async testDomains(domains={}) {
        for (const name in domains) {
            const domain = domains[name]
            await this.runTest(name, domain)
        }
        this.update()
    },
    async runTest (name, domain) {
        try {
            await fetch(domain, {
                method: 'GET'
            })
        } catch (err) {
            this.invalidDomains.push(domain)
        }
    },
    permitDomains() {
        for (const domain of this.invalidDomains) {
            window.open(domain)
        }
    }
}