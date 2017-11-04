import { NgModule } from '@angular/core';
import { 
       MatDialogModule, 
    MatButtonModule,
    MatListModule,
    MATERIAL_COMPATIBILITY_MODE,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule           
   } from '@angular/material';
@NgModule({
  imports: [
    MatDialogModule, 
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule ,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatDialogModule, 
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]

})
export class MaterialModule { }
