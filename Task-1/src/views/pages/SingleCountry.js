import Utils from './../../services/Utils.js'

let getPost = async (code) => {
    try {
        const response = await fetch(`https://countriesnode.herokuapp.com/v1/countries/` + code.toUpperCase())
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting Country', err)
    }
}

let SingleCountry = {
    render: async () => {
        let request = Utils.parseRequestURL()
        let country = await getPost(request.code)

        return /*html*/ `
            <section class="section">
                <h1> Country Name : ${country.name}</h1>
                <p> Country Currency : ${country.currency} </p>
                <p> Country Phone : ${country.phone} </p>
            </section>
        `
    },
    after_render: async () => {}
}

export default SingleCountry;