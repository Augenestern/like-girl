import { defineStore } from 'pinia'
// useMain  可以是 useUser、useCart 之类的名字 
// defineStore('main',{..}) 在devtools 就使用 main 这个名
export const useMain = defineStore('main', {
    // 相当于data
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
            cityName: '',
            cardsList: [
                { cardname: "表1", data: [{ name: '1111' }, { name: '2222' }, { name: '3333' }, { name: '4444' }],sign:'ddd'},
                { cardname: "表2", data: [{ name: '1111' }, { name: '2222' }, { name: '3333' }, { name: '4444' }],sign:'ddd'},
                { cardname: "表3", data: [{ name: '1111' }, { name: '2222' }, { name: '3333' }, { name: '4444' }],sign:'ddd'},
            ] as any,
        }
    },
    getters: {
    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
    },
    persist: true,
})