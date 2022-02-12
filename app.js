// create the app
const app = Vue.createApp({
    // set up data or functions to react to events
    // specify component template that would be rendered inside the app element
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img:'assets/1.jpg', isFav: true },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img:'assets/1.jpg', isFav: false },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img:'assets/1.jpg', isFav: true },
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            // check so when no data is passed in, no error raised
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app') // mount the app to the specified element (id="app") in the dom
                  // the vue app then controls anything inside the div