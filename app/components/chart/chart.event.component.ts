import {Component,Input} from '@angular/core';

@Component({
    selector: 'chart-events-example',
    template: `
        <chart   [options]="options" (selection)="onChartSelection($event)">
         <series (mouseOver)="onSeriesMouseOver($event)">
            </series>
        </chart>
    `
})
export class ChartEventsExample {

@Input() chartType : string;
    constructor() {
        this.options = {
        chart: {
            type: 'bar',zoomType: 'x'
        },
        title: {
            text: 'Historic World Population by Region'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            title: {
                text: 'RMIS Job Category'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            shadow: true
        },
        credits: {
            enabled: false
        },
         series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2012',
            data: [1052, 954, 4250, 740, 38]
        }]
    };
    }
    options: Object;
    onChartSelection (e) {
        console.log('onChartSelection', e);
    }
    onSeriesMouseOver (e) {
        console.log('onSeriesMouseOver', e);
    }
    onPointSelect (e) {
        console.log('onPointSelect', e);
    }
}