

var app = new Vue({
    el: '#app',
    data () {
        return {
            info: null,
            message: 'vitormcastro'
        }
    },
    methods: {
        buscaGitAccount: function(){
            axios.get('https://api.github.com/users/'+app.message)
            .then(Response => (this.info = Response))
            .catch(error => console.log(error))
        }
    }
});