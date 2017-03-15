
 FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'line',
    renderAt: 'Chart',
    width: '500',
    height: '200',
    dataFormat: 'json',
    insertMode: "prepend",
    dataSource: {
        "chart": {
            // "caption": "Monthly revenue",
            // "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Gulcose",
            "numberPrefix": "",
            "theme": "fint"
        },

        "data": [{
            "label": "Jan",
            "value": "100"
        }, {
            "label": "Feb",
            "value": "120"
        }, {
            "label": "Mar",
            "value": "30"
        }, {
            "label": "Apr",
            "value": "60"
        }, {
            "label": "May",
            "value": "80"
        }, {
            "label": "Jun",
            "value": "20"
        }, {
            "label": "Jul",
            "value": "30"
        }, {
            "label": "Aug",
            "value": "90"
        }, {
            "label": "Sep",
            "value": "55"
        }, {
            "label": "Oct",
            "value": "10"
        }, {
            "label": "Nov",
            "value": "110"
        }, {
            "label": "Dec",
            "value": "120"
        }]
    },

   
}
);
    fusioncharts.render();
});

   FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'line',
    renderAt: 'Chartsecond',
    width: '500',
    height: '200',
    dataFormat: 'json',
    insertMode: "prepend",
    dataSource: {
        "chart": {
            // "caption": "Monthly revenue",
            // "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Weight",
            "numberPrefix": "",
            "theme": "fint"
        },

         "data": [{
            "label": "Jan",
            "value": "100"
        }, {
            "label": "Feb",
            "value": "120"
        }, {
            "label": "Mar",
            "value": "30"
        }, {
            "label": "Apr",
            "value": "60"
        }, {
            "label": "May",
            "value": "80"
        }, {
            "label": "Jun",
            "value": "20"
        }, {
            "label": "Jul",
            "value": "30"
        }, {
            "label": "Aug",
            "value": "90"
        }, {
            "label": "Sep",
            "value": "55"
        }, {
            "label": "Oct",
            "value": "10"
        }, {
            "label": "Nov",
            "value": "110"
        }, {
            "label": "Dec",
            "value": "120"
        }]
    },

   
}
);
    fusioncharts.render();
});