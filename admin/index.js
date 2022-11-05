// For Line Chart
var ctx = document.getElementById("lineChart").getContext("2d");

var MyChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earning in $",
        data: [
          2050, 1900, 2100, 2800, 1900, 2000, 2300, 2600, 2345, 1020, 2400,
          2900,
        ],
        backgroundColor: ["rgb(4, 15, 221)"],
        borderColor: "#0631a9",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// For Doughnut-chart
var ctx2 = document.getElementById("doughnut").getContext("2d");

var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Academic", "Non-Academic", "Adminstration", "Others"],

    datasets: [
      {
        label: "Employees",
        data: [42, 12, 8, 6],
        backgroundColor: [
          "#f30707",
          "rgb(19, 0, 230)",
          "rgb(252, 183, 9)",
          "rgb(166, 1, 237)",
        ],
        borderColor: [
          "#f30707",
          "rgb(19, 0, 230)",
          "rgb(252, 183, 9)",
          "rgb(166, 1, 237)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
