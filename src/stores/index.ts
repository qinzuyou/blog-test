// stores/index.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('GlobalState', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    add() {
      this.count++
      console.log(this.count);
      
    },
    sub(){
      this.count--
      console.log(this.count);
      
    }
  },
  getters: {
    double(state){
      return state.count * 2;
    }
  }
})
