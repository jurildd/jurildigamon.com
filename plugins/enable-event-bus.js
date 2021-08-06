import Vue from 'vue';
import eventBusCallbacks from './event-bus-callbacks';

export const eventBus = new Vue();

Vue.use(eventBusCallbacks, eventBus);
Vue.prototype.$eventBus = eventBus;
