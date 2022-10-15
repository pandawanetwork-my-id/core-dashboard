/* utilities used for util function like localstorage, date, or many others */
import pkg from 'packagejson'
import moment from 'moment'
import Swal from 'sweetalert2'
import $ from 'jquery'

// import '@sweetalert2/theme-bootstrap-4/bootstrap-4.css'

const version = pkg.version
const name = pkg.name
const isDevelopment = import.meta.env.NODE_ENV
const ls = localStorage

export const getStorage = function (key, isJSON = false) {
    if (!key || key.length === 0) throw new Error('No Storage Key Defined');
    let data = ls.getItem(key);
    if (!isJSON) return data;
    return JSON.parse(data);
}

export const formatNumber = function (n) {
    return n
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const copyTextInSelector = function (selectorId) {
    const sel = document.getElementById(selectorId)
    const text = sel.html()
    if (!navigator) alert('copy text doesn\'t supported')
    navigator.clipboard.writeText(text)
}

export const sendToClipboard = function (text) {
    if (!navigator) alert('copy text doesn\'t supported')
    navigator.clipboard.writeText(text)
}
export const showAlertError = function (e) {
    if (!e) return null
    Swal.fire({icon: 'error', title: 'Error', text: e.error || e.message})
    console.error(e)
}

export const showAlertSuccess = function (message, opt={}) {
    Swal.fire({icon: 'success', title: 'Success', text: message, ...opt})
}

export const showConfirmation = function (message, opt={}) {
    return Swal.fire({
        title: 'Confirmation',
        text: message,
        confirmButtonText: 'Confirm',
        showCancelButton: true,
        ...opt
    })
}

export const showToastSuccess = function (message, opt={}) {
    Swal.fire({
        toast: true,
        icon: 'success',
        // title: message,
        // text: message,
        position: 'top-end',
        padding: '5px',
        html: `<span class="tx-12">${message}</span>`,
        buttonsStyling: 'tx-10',
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        ...opt
    })
}

export const showToastError = function (message, opt={}) {
    Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Error',
        text: message,
        ...opt
    })
}

export const parseRequestURL = function () {
    const url = location.hash.slice(1).toLowerCase() || ''
    const urlpath = url.substring(0, url.indexOf('?') >= 0 ? url.indexOf('?') : url.length).split("/").filter(x=>x.length > 0)
    const queryString = url.indexOf('?') >= 0 ? url.substring(url.indexOf('?')) : ''
    return {
        resource    : urlpath[1],
        verb        : urlpath[2] ? urlpath[2] : '',
        id          : urlpath[3] ? urlpath[3] : '',
        pathName    : urlpath.join('_'),
        queryString : queryString
    }
}

export const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const debugLog = function (...opt) {
    if (!isDevelopment) return null
    const time = moment().format('LLL')
    console.log(time, ...opt)
}

export const logInfo = function (...opt) {
    const time = moment().format('LLL')
    console.log(`[${name}:v${version}]`, time, ...opt)
}

export const logError = function (...opt) {
    const time = moment().format('LLL')
    console.log(`[${name}:v${version}]`, time)
    console.error(opt)
}

export const randomString = function (size=3, opt={ onlyNums: false, onlyChars: false }) {
    let result           = ''
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (opt.onlyNums) characters = '0123456789'
    else if (!opt.onlyChars) characters += '0123456789'
    let charactersLength = characters.length
    for ( var i = 0; i < size; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
   }
   return result
}

export const randomNumber = function (min=1, max=99999) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const setFavicon = function (favicon) {
    const h = $('head > link[rel="shortcut icon"]')
    if (h && h[0] && h[0].href) h[0].href = favicon
}

export const showModal = function (modalId) {
    const sel = $('#' + modalId)
    if (sel && sel.modal) sel.modal('show')
    return sel
}

export const hideModal = function (modalId) {
    $('#' + modalId).modal('hide')
}