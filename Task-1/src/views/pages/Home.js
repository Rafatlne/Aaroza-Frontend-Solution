let Home = {
    render: async () => {
        let view = /*html*/ `
            <section class="section">
                <h1> Home </h1>
                <h2 class="title is-2">Click The Countries On The Nav</h2>
            </section>
        `
        return view
    },
    after_render: async () => {}

}

export default Home;