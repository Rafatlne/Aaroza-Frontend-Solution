document.getElementById('singleCode').addEventListener('click', getCountry)

function getCountry(event) {
    event.preventDefault();
    let body = document.getElementById('code').value;
    body = body.toUpperCase();
    console.log(body);
    fetch('https://countriesnode.herokuapp.com/v1/countries/' + body)
        .then((res) => res.json())
        .then((country) => {
            let output = 
            `<div class="centered-table ">
            <h2>Single Country Table</h2>
            <table align="center">
                        <tr>
                            <th>Name</th>
                            <th>Currency</th> 
                            <th>Area Code</th>
                        </tr>`;
                output +=`
                    <tr >
                    <td style="border: 1px solid black;">${country.name}</td>
                    <td style="border: 1px solid black;">${country.currency}</td>
                    <td style="border: 1px solid black;">${country.phone}</td>
                    </tr>
                    `;
            output += `
            </table>
            </div>
            `;
            document.getElementById('output').innerHTML = output;
        });
}
