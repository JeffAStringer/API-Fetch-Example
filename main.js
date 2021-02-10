let arrayOfStats =[];

const getData = () => {
//function getData(){

	// Copy/paste the RapidAPI code
fetch("https://covid-193.p.rapidapi.com/statistics?country=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7324fe6e1emsh732f421bef4b7ebp18f6cbjsn0e6874038028",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})

// The example got us started, but it is WAY TMI. When I clicked on body, I see 'ReadableStream', so I googled 'js fetch readablestream'
	// .then(response => {
	// 	console.log(response);
	// })
	// .catch(err => {
	// 	console.error(err);
	// });

	//https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object

	.then(function(response) {
		// The response is a Response instance.
		// You parse the data into a useable format using `.json()`
		return response.json();
	  }).then(function(data) {
		// `data` is the parsed version of the JSON returned from the above endpoint.
		console.log(data); 
		console.log(data.response[0].continent); 
		
		let country = data.response[0].country;					// define the piece of data you want
		let countryHeading = document.getElementById('title');	// find the HTML tag you where you want to place the data
		let countryName = document.createTextNode(country);		// create a text node for the data
		countryHeading.appendChild(countryName);				// put the text inside the HTML tag

	  })
	.catch(err => {
	console.error(err);
	});


} // end getData()

