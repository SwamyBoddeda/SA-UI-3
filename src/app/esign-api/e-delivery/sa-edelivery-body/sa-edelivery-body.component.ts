import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sa-edelivery-body',
  templateUrl: './sa-edelivery-body.component.html',
  styleUrls: ['./sa-edelivery-body.component.css']
})
export class SaEdeliveryBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }

}
