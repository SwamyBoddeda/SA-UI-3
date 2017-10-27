import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { RequestOptions, BaseRequestOptions } from '@angular/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DialogModule } from './esign-api/dialog/dialog.module';
import { CoreModule } from './esign-api/core/core.module';
import { MaterialModule } from './material.module';
//import { NgbdModalComponent, NgbdModalContent } from './modal.component';

import { EDeliveryComponent } from './esign-api/e-delivery/e-delivery.component';
import { SaHeaderComponent } from './esign-api/e-delivery/sa-header/sa-header.component';
import { eDeliveryModule } from './esign-api/e-delivery/e-delivery.module'

@NgModule({
  declarations: [
    AppComponent,
    EDeliveryComponent,
    SaHeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    DialogModule,
    eDeliveryModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    [NgbModule.forRoot()]
  ],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
   // { provide: RequestOptions, useClass: BaseRequestOptions },
 //   { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  //entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
