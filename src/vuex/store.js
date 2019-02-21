import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
// 1.state：包含了store中存储的各个状态也叫数据。
// 2.getter: 类似于 Vue 中的计算属性，根据其他 getter 或 state 计算返回值。//调用方法store.getters.gettersFirst
// 3.mutation: 一组方法，是改变store中状态的执行者。Mutation 必须是同步函数。 //缓存的方法作用 调用方法例如： store.commit('inc')
// 4.action: 一组方法，其中可以含有异步操作。  //调用方法 store.dispatch('Actions')
