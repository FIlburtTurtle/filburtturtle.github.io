      //Reach
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'Email', 'Facebook'],
          ['Sun',   1231,    1624],
          ['Mon',   5215,    4345],
          ['Tue',   2212,    2321],
          ['Wed',   6235,    5314],
          ['Thu',   1321,    2121],
          ['Fri',   7132,    8324],
          ['Sat',   1123,    3121]
        ]);

        var options = {
          width: 'auto',
          height: '120',
          backgroundColor: 'transparent',
          colors: ['#3490ed', '#28b779', '#ff7f00'],
          tooltip: {
            textStyle: {
              color: '#999999',
              fontSize: 11
            },
            showColorCode: true
          },
          legend: {
            textStyle: {
              color: 'black',
              fontSize: 11
            }
          },
          chartArea: {
            left: 100,
            top: 10
          },
          focusTarget: 'category',
          hAxis: {
            textStyle: {
              color: 'black',
              fontSize: 11
            }
          },
          vAxis: {
            textStyle: {
              color: 'black',
              fontSize: 11
            },
            gridlines: {
              color: '#eee',
            },
            baselineColor: '#ccc',
          },
          pointSize: 5,
          chartArea: {
            left: 60,
            top: 10,
            height: '80%'
          },
          lineWidth: 1,
        };

        var chart = new google.visualization.LineChart(document.getElementById('lineReturn'));
        chart.draw(data, options);
      }

