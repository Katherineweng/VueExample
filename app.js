// create the app
const app = Vue.createApp({
    // set up data or functions to react to events
    // specify component template that would be rendered inside the app element
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app') // mount the app to the specified element (id="app") in the dom
                  // the vue app then controls anything inside the div