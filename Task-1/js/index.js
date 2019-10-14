function getCountries() {
    fetch('https://countriesnode.herokuapp.com/v1/countries/')
        .then((res) => res.json())
        .then((data) => {
            let output = 
            `<h2>All countries Table</h2>
            <table style="width:100%;border: 1px solid black;">
                        <tr>
                            <th>Name</th>
                            <th>Continent</th> 
                            <th>Languages</th>
                        </tr>`;
            data.forEach(country => {
                output +=`
                    <tr >
                    <td style="border: 1px solid black;">${country.name}</td>
                    <td style="border: 1px solid black;">${country.continent}</td>
                    <td style="border: 1px solid black;">${country.languages}</td>
                    </tr>
                    `;
            });
            output += `
            </table>
            `;
            document.getElementById('output').innerHTML = output;
        });
}

function init() {
    getCountries();
}

init()