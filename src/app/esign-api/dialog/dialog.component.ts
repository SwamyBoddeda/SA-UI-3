import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EsignApiService } from '../shared/esign-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from './dialog.service';
import 'rxjs/Rx';
import { IChallenges } from '../interfaces/IChallenges'; 

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  private esignAPIUrl;
  private guid;
  private lineOfBusiness;
  private appName;
  public title: string;
  public message: string;
  public valueIncorrect = false;
  // public questions:any[] = [];
  responseMessage: string;
  questions;
  years = [];
  startYear = 1960;
  endYear = 2017;
  selectedYear: string;
  fullImagePath;
  tempChallenges;

  challenges;
  

  constructor(private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog, public dialogService : DialogService,

    private apiService: EsignApiService
  ) {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.guid = params['guid'];
      this.lineOfBusiness = params['lob'];
      this.appName = params['appName'];
    });
    this.esignAPIUrl = this.apiService.getESignAPIUrl();
    this.fullImagePath = "../assets/images/sa.jpg";
    this.challenges = []
  }

  openDlg(){
    alert(JSON.stringify(this.challenges));
    let dialogRef = this.dialog.open(DialogOverview, {
      width: '45%',
      data:  { 
        challenges : this.challenges ,
        status : this.responseMessage
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //public challenges: IChallenges; 
  getQuestions() {

  this.dialogService
  .getChallenges(1)
  .subscribe(
    res => {
      console.log(res);
       this.tempChallenges = res;
       
       this.challenges.push(this.tempChallenges);
       console.log(res );
       alert(JSON.stringify(this.challenges));
       this.responseMessage = "success";
       this.openDlg();
  },
  err => {
      console.log(err );
  });
  
   
      const headers = new HttpHeaders().append('LOB', this.lineOfBusiness)
      .append('applicationName', this.appName)
    //  const url = `${this.esignAPIUrl}/${this.guid}/questions`;
      const url = "http://localhost:3000/challenges";
   
  }

  ngOnInit() {
    this.getQuestions();
    
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverview implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public dialogService: DialogService) { 
      this.generateYears(this.startYear, this.endYear);
      this.challenges = this.data.challenges;
      this.responseMessage = this.data.status;
      this.question = 0;
    }

    years = [];
    startYear = 1960;
    endYear = 2017;
    selectedYear;
    valueIncorrect;
    qOne;
    qOneInfo;
    qTwo;
    qTwoInfo;
    zipcodeValue;
    question;
    challenges;
    tempChallenges;
    responseMessage;

    generateYears(start, end) {
      for (let year = start; year <= end; year++) {
        this.years.push(year)
      }
      return this.years;
    };

    closeDialog(){
    window.location.href = 'https://www.google.com';
      // After close I want to redirect to google.com
    }

    submitChallenge(qid,question,answer){

/*
      if(qid == 1){
      if (this.selectedYear == 1962) {
        this.valueIncorrect = false;
        this.dialogRef.close();
      }
      else{
        this.dialogService
        .getChallenges(2)
        .subscribe(
          res => {
            console.log(res);
             this.tempChallenges = res;
             this.challenges.push(this.tempChallenges);
             this.question = 1;
        },
        err => {
            console.log(err );
        });
       
        
        this.qOne = false;
        this.qOneInfo = true;
        this.qTwo = true;
      }
    }
    else if(qid == 2){
      if(this.zipcodeValue == 1234){
        this.dialogRef.close();
     //   this.router.navigate(['/eDelivery']);
      }
      else{
          this.qOneInfo = true;
          this.qTwoInfo = true;
          this.qTwo = false;
      }
     alert(this.zipcodeValue);
    
    
    }

    */
    }
    
    ngOnInit(){
      this.qOne = true;
      this.qOneInfo = false;
      this.qTwo = false;
      this.qTwoInfo = false;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}