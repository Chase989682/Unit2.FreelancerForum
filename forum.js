/*A visitor enters the website and finds a list of available freelancers. Each freelancer has a name,
 an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30,
  and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers.
 In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, 
who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.*/

// make the elements print to the screen with a query selector function

// create an array of of the initial freelancers on the page: Alice and Bob
// then create an array of the new freelancers that will be added by render and
// interval functions
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector("#container");

  // Create table and its elements
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const headerRow1 = document.createElement("tr");
  const headerRow2 = document.createElement("tr");
  const headerRow1Data = document.createElement("td");
  const headerRow2Data = document.createElement("td");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  // Set text content for h1
  h1.textContent = "Freelancer Forum";

  // Append elements to the root
  root.appendChild(table);
  table.appendChild(tableHead);
  tableHead.appendChild(headerRow1);
  tableHead.appendChild(headerRow2);
  headerRow1.appendChild(headerRow1Data);
  headerRow2.appendChild(headerRow2Data);
  headerRow1Data.appendChild(h1);
  headerRow2Data.appendChild(h2);
  table.appendChild(tableBody);

  const initialFreelancers = [
    { name: "Alice", occupation: "Teacher", price: 30 },
    { name: "Bob", occupation: "Writer", price: 50 },
  ];

  const newFreelancers = [
    { name: "Carol", occupation: "Programmer", price: 100 },
    { name: "Johnathon", occupation: "Graphic Designer", price: 60 },
    { name: "Jared", occupation: "Photographer", price: 65 },
    { name: "Connor", occupation: "Carpenter", price: 82 },
    { name: "Gregory", occupation: "Architech", price: 287 },
  ];

  populateTable(newFreelancers[0]);

  //create a function to calculate the total price for the initial freelancers
  function calculateAveragePrice(freelancers) {
    let totalPrice = 0;
    freelancers.forEach((freelancers) => {
      totalPrice += freelancers.price;
    });
    return totalPrice / freelancers.length;
  }

  //create a function to update the freelancer list and the average price at an interval
  function updateFreelancersListAndAverage(newData) {
    initialFreelancers.push(...newData);
    initialPriceAverage = calculateAveragePrice(initialFreelancers);
    h2.textContent = initialPriceAverage.toFixed(2);
    headerRow2Data.innerHTML = "";
    headerRow2Data.appendChild(h2);
  }
  updateFreelancersListAndAverage(newFreelancers);
  const initialAverage = calculateAveragePrice(initialFreelancers);
  const initialAverageElement = document.createElement("h2");
  initialAverageElement.textContent = initialAverage.toFixed(2);
  headerRow2Data.appendChild(initialAverageElement);
  setInterval(() => {
    updateFreelancersListAndAverage(newFreelancers);
  }, 4000);

  // use a query selector to select the main container already implemented into the body
  //and then create the elements and append them as children to that ID
  //root.appendChild(child)

  //tableBody.appendChild(tableBodyRow); goes into loop

  //create a foreach loop that adds a new row to the body and each key
  //value pair to the data cells
  function populateTable(freelancer) {
    const bodyRow = document.createElement("tr");

    for (const key in freelancer) {
      if (freelancer.hasOwnProperty(key)) {
        //create the data cell
        const cell = document.createElement("td");
        // add the content to that row
        cell.textContent = freelancer[key];
        //append that to the rows
        bodyRow.appendChild(cell);
      }
    }
    tableBody.appendChild(bodyRow);
  }
  populateTable(initialFreelancers);
  setInterval(() => {
    updateFreelancersListAndAverage(newFreelancers);
  }, 4000);
});
