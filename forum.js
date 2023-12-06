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

const root = document.querySelector("#container");
const priceValue = document.querySelector("#priceValue");
const table = document.createElement("table");
// Create the elements of the existing table and store it in a function
function tableHeader(table) {
  // const tHead = document.createElement("th");

  //create the header rows
  const headerRow = document.createElement("tr");
  headerRow.classList.add("categories");
  //create an array that will store the headers
  const headers = ["Name", "Occupation", "Starting Price"];
  //loop over those headings and store them into headings
  for (const header of headers) {
    const th = document.createElement("th");
    th.classList.add("freelancer-categories");
    th.textContent = header;
    //append that to the header row
    headerRow.appendChild(th);
  }
  //append the header row to the thead
  // tHead.appendChild(headerRow);
  //apend that to the table
  table.appendChild(headerRow);
}

// root.appendChild(table);
// tableHeader(table);
//create a table
const tBody = document.createElement("tbody");
function tableBody(table, initialFreelancers) {
  //create a table row for every freelancer using a for in loop
  for (const freelancer of initialFreelancers) {
    const tableRow = document.createElement("tr");

    //add name, occupation, and price to the cells
    // create a loop within the above loop
    for (const key in freelancer) {
      const cell = document.createElement("td");
      cell.textContent = freelancer[key];
      tableRow.appendChild(cell);
    }
    tBody.appendChild(tableRow);
    console.log(tBody);
  }
  table.appendChild(tBody);
  return tBody;
}

const initialFreelancers = [
  { name: "Alice", occupation: "Teacher", price: 30 },
  { name: "Bob", occupation: "Writer", price: 50 },
];
let intervalId = null;
let pointer = 0;
function simulateNewFreelancer() {
  intervalId = setInterval(() => {
    if (pointer < newFreelancers.length) {
      const newFreelancer = newFreelancers[pointer];
      updateTableandAverage(newFreelancer);
      pointer++;
    } else {
      clearInterval(intervalId);
    }
  }, 5000);
  // if (initialFreelancers.length >= 5) {
  //   clearInterval(intervalId);
  //   console.log("hello world");
  // }

  return intervalId;
}
const newFreelancers = [
  { name: "Carol", occupation: "Programmer", price: 100 },
  { name: "Johnathon", occupation: "Graphic Designer", price: 60 },
  { name: "Jared", occupation: "Photographer", price: 65 },
  { name: "Connor", occupation: "Carpenter", price: 82 },
  { name: "Gregory", occupation: "Architech", price: 287 },
];

//create a function to calculate the total price for the initial freelancers
function calculateAveragePrice(freelancers) {
  const totalPrice = freelancers.reduce((acc, curr) => acc + curr.price, 0);
  const averagePrice = totalPrice / freelancers.length;
  priceValue.innerHTML = Math.floor(averagePrice);
}
function appendTableToContainer(table) {
  const root = document.querySelector("#container");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Available Freelancers";
  root.appendChild(h2);
  root.appendChild(table);
}

function updateTableandAverage(newFreelancer) {
  initialFreelancers.push(newFreelancer);
  calculateAveragePrice(initialFreelancers);
  if (initialFreelancers.length >= 7) {
    clearInterval(intervalId);
    console.log("hello world");
  }
  // const table = document.createElement("table");
  // tableHeader(table);
  // tableBody(table, initialFreelancers);
  // appendTableToContainer(table);
  // calculateAveragePrice(initialFreelancers);
  const tableRow = document.createElement("tr");

  //add name, occupation, and price to the cells
  // create a loop within the above loop

  for (const key in newFreelancer) {
    const cell = document.createElement("td");
    cell.textContent = newFreelancer[key];
    tableRow.appendChild(cell);
  }
  tBody.appendChild(tableRow);
}

function render(initialState) {
  tableHeader(table);
  tableBody(table, initialState);
  appendTableToContainer(table);
  // updateTableandAverage(newFreelancer);
  simulateNewFreelancer();
}
render(initialFreelancers);
