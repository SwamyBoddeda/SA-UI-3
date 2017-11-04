import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material.module';
import { FormsModule } from '@angular/forms';
import { SaHeaderComponent } from './sa-header/sa-header.component';
import { SaEdeliveryBodyComponent } from './sa-edelivery-body/sa-edelivery-body.component';
import { SaSidebarComponent } from './sa-sidebar/sa-sidebar.component'

@NgModule({
    imports : [
        MaterialModule,
        FormsModule
    ],
    declarations:[
    SaHeaderComponent,
    SaEdeliveryBodyComponent,
    SaSidebarComponent],
    exports: [
        SaHeaderComponent,
        SaEdeliveryBodyComponent,
        SaSidebarComponent
    ]
    
})

export class eDeliveryModule {}