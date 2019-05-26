// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

/* require("@rails/ujs").start() */
/* require("turbolinks").start() */
require("@rails/activestorage").start();
require("channels");

import Vue from 'vue/dist/vue.esm.js';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.component('form', {

});

/* import json from '~/data.json'
export default{
    data(){
        return{
            myData: json
        }
    }
} */

new Vue({
    el: '#app',
    data: {
        name: 'VALERA'
    },
    computed: {

    }
});



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Витрачено', 'Встановлена норма'],
        datasets: [{
            label: 'Останній місяць',
            backgroundColor: 'blue',
            borderColor: 'green',
            data: [77, 160]
        }]
    },

    // Configuration options go here
    options: {legend: {
            display: false
        }}
});

var ctx = document.getElementById('weekChart').getContext('2d');
var weekchart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Витрачено', 'Встановлена норма'],
        datasets: [{
            label: 'Останній місяць',
            backgroundColor: 'blue',
            borderColor: 'green',
            data: [77, 40]
        }]
    },

    // Configuration options go here
    options: {legend: {
            display: false
        }}
});

var ctx = document.getElementById('dayChart').getContext('2d');
var daychart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Витрачено', 'Встановлена норма'],
        datasets: [{
            label: 'Останній місяць',
            backgroundColor: 'blue',
            borderColor: 'green',
            data: [77, 5]
        }]
    },

    // Configuration options go here
    options: {legend: {
            display: false
        }}
});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
