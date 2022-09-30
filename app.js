const app = Vue.createApp({
    data() {
        return {
            firstName: 'Vcent',
            lastName: 'Smith',
            phone: '081-454-0666',
            age: 26,
            email: 'vcent.smith@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/1.jpg',
            github: 'https://github.com/JayaramS19/Random-users.git',
        }
    },
    created() {
        window.addEventListener('load', this.getRandomUser);
    },
    methods: {
        async getRandomUser() {
            const res = await fetch('https://randomuser.me/api/');
            const data = await res.json();
        
            this.firstName = data.results[0].name.first;
            this.lastName = data.results[0].name.last;
            this.phone = data.results[0].phone;
            this.age = data.results[0].dob.age;
            this.email = data.results[0].email;
            this.gender = data.results[0].gender;
            this.picture = data.results[0].picture.large;
        },
    }
});

app.mount('#app');