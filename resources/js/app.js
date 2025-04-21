require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import setupEcho from './plugins/echo';
setupEcho();

const app = new Vue({
    el: '#app',
});
