import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
  ApexTooltip
} from "ng-apexcharts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mofid-securities';
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "",
        data: [90 , 200, 40, 10, 30, 110, 20]
      },
    ],
    chart: {
      height: 130,
      width:'350',
      type: "bar",
      offsetY:-5,
      toolbar:{
        show:false,
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth:'30%',
        barHeight: '100%',
        rangeBarOverlap:true,
        dataLabels: {
          maxItems:2,
          position: "top",
        },
        borderRadius: 5
      }
    },
    colors:['#D93B58' , '#FF7A8A' , '#FFCCCF' , '#BFBFBF' , '#D5EDE3' , '#66D4AB' , '#00AD7F'],
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return new Intl.NumberFormat('fa',{}).format(+val);
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#595959"],
        fontWeight:100,
        fontFamily: 'Iran Yekan'
      }
    },
    legend:{
      show:false,
    },
    grid:{
      show:false,
      padding:{
        left:0,
        right:0,
      }
    },
    tooltip:{
      enabled:false
    },
    xaxis: {
      type:'category',
      categories: [
        "-۴%>",
        "-۴ _ -۲%",
        "-۲ _ -۰.۵%",
        "-۰.۵ _ ۰.۵%",
        "۰.۵ _ ۲%",
        "۲ _ ۴%",
        "۴%<",
      ],
      position: "bottom",
      labels:{
        show:true,
        rotate:0,
        offsetY:-5,
        style:{
          fontFamily:'Iran Yekan',
          fontSize:'8px',
          fontWeight:400,
          cssClass:'xaxis-chart'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false,
      }
    },
    yaxis: {
      show:false,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
  };
  constructor(){}
  openItem:number = -1;
  evaluationData = [
    {
      name:'تست ۱',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۲',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۳',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۴',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۵',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۶',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۷',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۸',
      value:0,
      items:this.evaluationItems()
    },
    {
      name:'تست ۹',
      value:0,
      items:this.evaluationItems()
    }
  ];
  evaluationItems ():evaluationItem[] {
    return [
      {
        name:'متن ۱',
        percentage: Math.floor(Math.random() * (10000) + 100) / 100,
        value: Math.floor(Math.random() * 10) + 1
      },
      {
        name:'متن ۲',
        percentage: Math.floor(Math.random() * (10000) + 100) / 100,
        value: Math.floor(Math.random() * 10) + 1
      },
      {
        name:'متن ۳',
        percentage: Math.floor(Math.random() * (10000) + 100) / 100,
        value: Math.floor(Math.random() * 10) + 1
      },
      {
        name:'متن ۴',
        percentage: Math.floor(Math.random() * (10000) + 100) / 100,
        value: Math.floor(Math.random() * 10) + 1
      },
    ]
  }
  evaluationCalc (item:evaluationItem[]){
    let value:number = 0
    item.forEach(x =>{
      value += x.value
    })
    return Math.round(value / item.length);
  }

  itemSelect(index:number){
    index !== this.openItem ? this.openItem = index : this.openItem = -1;
  }
  ngOnInit(): void {
    this.evaluationData = this.evaluationData.map(x =>{
      return{
        ...x,
        value:this.evaluationCalc(x.items)
      }
    })

  }


}

interface evaluationItem{
  name:string;
  percentage:number;
  value:number;
}
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  colors: any[];
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
};
