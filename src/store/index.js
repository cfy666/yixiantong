import Vue from 'vue';
import Vuex from 'vuex';
import mutation from './mutation';
import sate from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  sate,
  mutation
})

export default store;