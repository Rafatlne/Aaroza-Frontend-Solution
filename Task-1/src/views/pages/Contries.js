let getPostsList = async () => {
    try {
        const response = await fetch(`https://countriesnode.herokuapp.com/v1/countries`)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting Countries', err)
    }
}

let Countries = {
    render: async () => {
        let posts = await getPostsList()
        let view = /*html*/ `
           <section class="section">
           <h2>All countries Table</h2>
           <table style="width:100%;border: 1px solid black;">
                       <tr>
                           <th>Name</th>
                           <th>Continent</th> 
                           <th>Languages</th>
                       </tr>
                   ${ posts.map(country => 
                       /*html*/
                    `
                    <tr >
                    <td style="border: 1px solid black;"><a href="#/countries/${country.code}">${country.name}</a></td>
                    <td style="border: 1px solid black;">${country.continent}</td>
                    <td style="border: 1px solid black;">${country.languages}</td>
                    </tr>
                    `
                    ).join('\n ')
                   }
                   </table>
           </section>
       `
        return view
    },
    after_render: async () => {}

}

export default Countries;