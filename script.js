let slider = document.getElementById("yearly");
let time = document.getElementById("time");
let interest = document.getElementById("interest");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let pamount = document.getElementsByClassName('pamount');
let iamount = document.getElementsByClassName('iamount');
let tamount = document.getElementsByClassName('tamount');

let principalValue = parseFloat(slider.value) || 0;
let timeValue = parseFloat(time.value) || 1;
let annualInterestValue = parseFloat(interest.value) || 1;

slider.addEventListener("change", function (event) {
  range1.value = event.target.value;
});

slider.addEventListener("mousemove", function (event) {
  range1.value = event.target.value;
  principalValue = parseFloat(event.target.value);
  calculateTotal();
});

time.addEventListener("change", function (event) {
  range2.value = event.target.value;
});

time.addEventListener("mousemove", function (event) {
  range2.value = event.target.value;
  timeValue = parseFloat(event.target.value);
  calculateTotal();
});

interest.addEventListener("change", function (event) {
  range3.value = event.target.value;
});

interest.addEventListener("mousemove", function (event) {
  range3.value = event.target.value;
  annualInterestValue = parseFloat(event.target.value);
  calculateTotal();
});

function calculateTotal() {
  let p = principalValue;
  let n = timeValue;
  let r = annualInterestValue;

  // Simple Interest formula
  const interestAmount = (p * n * r) / 100;
  const totalAmountPayable = p + interestAmount;

  // Update UI
  pamount[0].innerHTML = Math.round(p);
  iamount[0].innerHTML = Math.round(interestAmount);
  tamount[0].innerHTML = Math.round(totalAmountPayable);

  // Graph
  const xArray = ["Principal Amount", "Interest Amount"];
  const yArray = [p, interestAmount];

  const layout = { title: "Simple Interest Calculator in Graphics" };
  const data = [{ labels: xArray, values: yArray, type: "pie" }];

  Plotly.newPlot("myPlot", data, layout);
}

calculateTotal();

range1.addEventListener("keyup", function (event) {
  slider.value = event.target.value;
});
range2.addEventListener("keyup", function (event) {
  time.value = event.target.value;
});
range3.addEventListener("keyup", function (event) {
  interest.value = event.target.value;
});
