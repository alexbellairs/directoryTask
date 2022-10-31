// api url
const api_url =
  "https://directory.spineservices.nhs.uk/STU3/Organization?address-city=stockport";

// Defining async function
async function getapi(api_url) {
  // Storing response
  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();
  if (response) {
    // console.log(data.entry);
    for (let each in data.entry) {
      console.log(data.entry[each]);
      console.log(data.entry[each].resource.name);
      console.log(data.entry[each].resource.address.line);
    }
    show(data.entry);
    console.log(data);
  }
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
async function show(data) {
  let tab = `<tr>
		<th>Name</th>
    <th>Address</th>
    <th>Postal Code</th>
		</tr>`;

  // Loop to access all rows
  for (let eachItem of data) {
    tab += `<tr>
	    <td>${eachItem.resource.name}</td>
      <td>${eachItem.resource.address.line}</td>
      <td>${eachItem.resource.address.postalCode}</td>
    </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("data_table").innerHTML = tab;
}
