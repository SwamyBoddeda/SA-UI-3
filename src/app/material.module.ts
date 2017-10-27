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
    MatInputModule } from '@angular/material';
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
    MatInputModule 
    
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
    MatInputModule 
  ]

})
export class MaterialModule { }
