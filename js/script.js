console.log('script.js connected');
Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });
});
Vue.component('test-component', {
    data: function () {
        return {
            test: [
                {name: 'Some Name 1', model: 'Some Model 1'},
                {name: 'Some Name 2', model: 'Some Model 2'},
                {name: 'Some Name 3', model: 'Some Model 3'},
                {name: 'Some Name 4', model: 'Some Model 4'},
                {name: 'Some Name 5', model: 'Some Model 5'},
                {name: 'Some Name 6', model: 'Some Model 6'},
                {name: 'Some Name 7', model: 'Some Model 7'}
            ]
        }
    },
    template: '<div><div class="component-element" v-for="el in test">{{ el.name }} -- {{ el.model }}</div></div>'
});
new Vue({
    el: '#container-for-component-1',
    data: {}
});
new Vue({
    el: '#container-for-component-2',
    components: {
        'test-local-component': {
            data: function(){
                return {
                    test: [
                        {name: 'Some Name 1 local', model: 'Some Model 1 local'},
                        {name: 'Some Name 2 local', model: 'Some Model 2 local'},
                        {name: 'Some Name 3 local', model: 'Some Model 3 local'},
                        {name: 'Some Name 4 local', model: 'Some Model 4 local'},
                        {name: 'Some Name 5 local', model: 'Some Model 5 local'},
                        {name: 'Some Name 6 local', model: 'Some Model 6 local'},
                        {name: 'Some Name 7 local', model: 'Some Model 7 local'}
                    ]
                }
            },
            template: '<div><div class="component-element" v-for="el in test">{{ el.name }} -- {{ el.model }}</div></div>'
        }
    }
});
new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue',
        styleCSS: '',
        firstValue: 1,
        visible: true,
        list: [
            {name: 'Name 1', message: 'Message 1'},
            {name: 'Name 2', message: 'Message 2'},
            {name: 'Name 3', message: 'Message 3'},
            {name: 'Name 4', message: 'Message 4'}
        ],
        message: 'hello'
    },
    methods: {
        changeText() {
            this.title = 'ANOTHER TEXT';
        },
        change(value) {
            this.firstValue = value;
        }
    },
    computed: {
        secondValue() {
            return this.firstValue + ' ' + this.firstValue;
        },
        showMessage() {
            return this.message.toUpperCase();
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase() + ' вызван фильтр lowercase';
        }
    }
});
