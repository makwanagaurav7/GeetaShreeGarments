import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {}

  minimizeApp() {
    this.commonService.minimizeApp();    
  }

  closeApp() {
    this.commonService.closeApp();
  }
}
