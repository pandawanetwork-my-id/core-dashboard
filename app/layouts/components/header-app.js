import $ from 'jquery'
import 'bootstrap/js/dist/tooltip'
import { goTo } from 'helpers/ma'
import { getStorage } from 'helpers/storage'
import { logInfo } from 'helpers/utilities'
import AppLogo from 'theme/images/logo.png'
import UserLogo from 'theme/images/profile.png'

export default {
    state:{
        profileMenu: {
            isActive: false
        }
    },
    AppLogo,
    UserLogo,
    components: {
    },
    getProfileMenu(){
        return this.classNames({
            show: this.state.profileMenu.isActive,
        })
    },
    openProfile(e){
        e.preventDefault()
        this.toggleProfile()
    },
    toggleProfile(){
        this.state.profileMenu.isActive = !this.state.profileMenu.isActive
        this.update()
    },
    goTo(link) {
        this.state.profileMenu.isActive = false
        this.update()
        logInfo(link)
        goTo(link)
    },
    onMounted(){
        window.cekProfile = this
        setTimeout(()=>{
            $('[data-toggle="tooltip"]').tooltip();
        })
        this.lastLogin = getStorage('LAST_LOGIN')
        this.state.profileMenu.isActive = false
        this.username = getStorage('USERNAME')
        this.update()
    }

}