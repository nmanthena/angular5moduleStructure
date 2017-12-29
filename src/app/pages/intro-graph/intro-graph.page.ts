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
  public doughnutChartLabels:string[] = ['Active Positions', 'Pending Positions', 'Completed Positions', 'On Hold / Reject Positions'];
  public doughnutChartColors:any[] = [{ backgroundColor: ["#65af32", "#fa9801", "#0291cd", "#fc5207"] }];
  public doughnutChartData:number[] = [250, 250, 250, 250];
  public doughnutChartType:string = 'doughnut';
 
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
