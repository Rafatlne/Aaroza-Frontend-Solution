let Navbar = {
    render: async () => {
        let view = /*html*/ `
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                        <div class="navbar-start">
                            <a class="navbar-item" href="/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/#/countries">
                                Countries
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => {}

}

export default Navbar;