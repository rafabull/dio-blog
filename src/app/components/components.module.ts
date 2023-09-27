import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainCardComponent } from './main-card/main-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MainCardComponent,
    ProjectCardComponent
  ]
})
export class ComponentsModule { }
