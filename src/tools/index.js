import Vue from 'vue'
import { MessageBox } from 'element-ui'
import store from '../store'
import router from '@/router/index'


function sginOut() {
    MessageBox.confirm(
        '您确定要退出吗？',
        '温馨提示', {
            confirmButtonText: '确定',
            type: 'warning',

            closeOnClickModal: false,
            closeOnPressEscape: false,
        }
    ).then(() => {
        store.dispatch('LogOut').then(() => {
            router.push('/Login')
                // location.reload() // 为了重新实例化vue-router对象 避免bug
        })
    })
}


const tools = {
    sginOut
}

Vue.prototype.$tools = tools;