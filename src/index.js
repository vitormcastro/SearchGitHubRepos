

var app = new Vue({
    el: '#app',
    data () {
        return {
            nome: null,
            avatarUrl: null,
            bio: null,
            perfilUrl: null,
            login: '',
            show: false,
            falha: false,
            messageFalha: null
        }
    },
    methods: {
        buscaGitAccount: function(){
            axios.get('https://api.github.com/users/'+app.login)
            .then(Response =>{
                if(Response.data.name !== null){
                    this.nome = Response.data.name;
                }
                else{
                    this.nome = Response.data.login;
                }
                this.avatarUrl = Response.data.avatar_url;
                this.bio = Response.data.bio;
                this.show = true;
                this.falha = false;
                this.perfilUrl = Response.data.html_url;
            })
            .catch(error => {
                console.log(error);
                this.show = false;
                this.falha = true;
                this.messageFalha = error.response.data.message;
            })
        }
    }
});