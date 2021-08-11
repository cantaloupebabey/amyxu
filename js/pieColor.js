// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieColor").getContext('2d');
var pieColor = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["meow", "meoww", "meowww"],
    datasets: [{
      backgroundColor: [
        "#c3c390",
        "#d7bf96",
        "#f89f65"
      ],
      data: [12,45,43]
    }]
  }
});