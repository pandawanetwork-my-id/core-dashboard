import { addClass, removeClass } from 'helpers/dom'
import { menuItems } from 'configs/menu.config'
import { logInfo } from 'helpers/utilities'

export default {
    components: {
    },
    state: {
        profileMenu: {
            isActive: true
        },
        activeMenu: 'dashboard',
        isSettingMenu: false,
    },
    parentMenus: [
        'menu.api-gateway',
        'menu.master-data',
    ],
    onMounted(){
        this.subActive = false;
        this.renderMenu()
        this.update()
    },
    renderMenu(){
        this.menuItems = menuItems
    },
    ActiveClass(moduleActive, menuName){
        if (moduleActive === menuName) return 'active'
        const d = {
            'summary': 'menu.summary',
            'administration-api-gateway-stats': 'menu.api-gateway',
            'administration-api-gateway-routers': 'menu.api-gateway',
            'administration-master-clients': 'menu.master-data',
            'administration-master-domains': 'menu.master-data',
            'administration-master-middlewares': 'menu.master-data'
        }
        // logInfo(moduleActive, menuName)
        const name = d[moduleActive]
        if (this.parentMenus.indexOf(name) > -1) this.toggleSettings({ name })
        if (name === menuName) return 'active'
        else return ''
    },
    EventSub(){
        this.subActive = !this.subActive;
        this.update()
    },
    onUnmounted(){
        // clearInterval(this.SetInterval)
    },
    toggleSettings({ name }) {
        const collapsedParents = this.parentMenus.filter(x => x !== name)
        // console.log({collapsedParents})
        for (const p of collapsedParents) {
            removeClass(document.getElementById(p), 'd-block')
        }
        if (['report', 'task-pendings'].indexOf(name) === -1) {
            const elem = document.getElementById(name)
            addClass(elem, 'd-block')
        }
    }
}