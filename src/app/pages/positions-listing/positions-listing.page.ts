import { Component, OnInit } from '@angular/core';;
import {Router,ActivatedRoute} from "@angular/router";
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-positions-listing',
  templateUrl: './positions-listing.page.html',
  styleUrls: ['./positions-listing.page.css']
})
export class PositionsListingPage implements OnInit {
  private positionData:any;
  private positionId:number;
  constructor(
    private route:ActivatedRoute,
    private dServe:DashboardService,
    private router:Router

  ) {
    this.route.params.subscribe( params => {
      this.getPositionsByType(params.id)
      this.positionId = params.id
    });
   }

  ngOnInit() {
     
  }

  getPositionsByType(
    num:any,
  ){
    console.log(num)
    this.dServe.getPositionsByType(num).subscribe(data => {
      this.positionData = data.response;
     // this.router.navigate(['/main/positions-listing', num]);
    }, error => {
      console.log(error);
    })
  }

}
