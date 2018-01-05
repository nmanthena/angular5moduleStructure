import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-graph',
  templateUrl: './intro-graph.page.html',
  styleUrls: ['./intro-graph.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroGraphPage implements OnInit {

  constructor(private router: Router) { }
  public doughnutChartLabels:string[] = ['Active Positions', 'Pending Positions', 'Completed Positions', 'On Hold','Reject Positions'];
  public doughnutChartColors:any[] = [
    { backgroundColor: ["#65af32", "#fa9801", "#0291cd", "#fc5207", '#CCCCCC']},
  ];
  public doughnutChartData:number[] = [240, 190, 160, 300, 120];
  public doughnutChartType:string = 'doughnut';
  public chartData:any = {
    datasets: [{
        data: [45, 25, 20, 10],
        hoverBorderWidth: [20,30,40,50  ]
    }],
    labels: ['Red', 'Blue', 'Purple', 'Yellow']
};

  public doughnutChartOptions:any = {
    legend: {position: 'bottom'},
    title: {
      display: true,
      text: 'All Positions Status Chart',
      fontSize: 24, fontColor:'green', padding:10
    },
    cutoutPercentage:60,
  }
 
  // events
  public chartClicked(e:any):void {
    if(e.active.length > 0){
      let item = e.active[0]._index
      console.log(item)
      this.router.navigate(['main/dashboard']);
    }
  }
 
  public chartHovered(e:any):void {
    let item = e.active.ChartElement
    
  }
  ngOnInit() {
  }

}
