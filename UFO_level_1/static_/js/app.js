// from data.js
var tableData = data;
var tbody = d3.select("tbody")

function displayData(data){ 
  tbody.text("")
  data.forEach(function(sighting){
  new_tr = tbody.append("tr")
  Object.entries(sighting).forEach(function([key, value]){
      new_td = new_tr.append("td").text(value)  
  })
})}

displayData(tableData)



var tbody = d3.select("tbody")

var button = d3.select("#filter-btn");

tbody.html("")

button.on("click", function() {
	// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // console.log(people);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  // row = tbody.append('tr')

  console.log(filteredData);

var tbody = d3.select("tbody")
     .selectAll("tr")
     .data(filteredData)
     .enter().append("tr");

    var td = tbody.selectAll("td")
     .data(function(d, i) { return Object.values(d); })
     .enter().append("td")
       .text(function(d) { return d; });
});
// //   for(let i = 0; i < filteredData.length; i++){ 
// 	let date  = filteredData[i].datetime;
// 	let city  = filteredData[i].city;
// 	let state  = filteredData[i].state;
// 	let country  = filteredData[i].country;
// 	let shape  = filteredData[i].shape;
// 	let drtn  = filteredData[i].durationMinutes;
// 	let cmnts  = filteredData[i].comments;
// // tbody.html("")
// // row = tbody.append('tr');
// tbody.append("td").text(date);
// tbody.append("td").text(city);
// tbody.append("td").text(state);
// tbody.append("td").text(country);
// tbody.append("td").text(shape);
// tbody.append("td").text(drtn);
// tbody.append("td").text(cmnts);
//  }
// });

// // Get a reference to the table body
// var tbody = d3.select("tbody");

// Append data table to web page and add new rows of data for each UFO sighting 
// function displayData(data){ 
//   tbody.text("")
//   data.forEach(function(sighting){
//   new_tr = tbody.append("tr")
//   Object.entries(sighting).forEach(function([key, value]){
//       new_td = new_tr.append("td").text(value)	
//   })
// })}

// displayData(tableData)

fucntion selectData(tableData){
	tbody.text("");
	tableData.forEach(fuction(event){
		new_tr = tbody.append("tr");
		Object.entries(event).forEach([key, value]){
			new_td = new_tr.append("td").text(value);
		})
	}}
; 

// button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   // console.log(people);

//   var filteredData = tableData.filter(event => event.datetime === inputValue);

//   selectData(filteredData);


// var button = d3.select("#filter-btn");
// var dateInput = d3.select('#datetime');

// // Complete the click handler for the form
//  function clickSelect() {
//   // Prevent the page from refreshing
//     d3.event.preventDefault();
//   //print the value that was input
//   console.log(dateInput.property("value"));
//   //create a new table showing only the filterd data
//   var new_table = tableData.filter(sighting => sighting.datetime===dateInput.property("value"))
//     //display the new table
//     displayData(new_table);  
// }

// // event listener to handle change and click for date
// dateInput.on("change", clickSelect)