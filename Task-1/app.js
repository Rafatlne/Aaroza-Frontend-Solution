"use strict";

import Home from './src/views/pages/Home.js'
import Error404 from './src/views/pages/Error404.js'
import Countries from './src/views/pages/Contries.js'
import SingleCountries from './src/views/pages/SingleCountry.js'

import Navbar from './src/views/components/Navbar.js'
import Bottombar from './src/views/components/Bottombar.js'

import Utils from './src/services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/countries': Countries,
    '/countries/(:code)': SingleCountries
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');

    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    console.log(request)
    // Parse the URL and if it has a :code part, change it with the string "(:code)"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.code ? '/(:code)' : '')

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);