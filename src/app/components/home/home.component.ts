import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProductsComponent } from '../products/products.component';
import { TechnologyComponent } from '../technology/technology.component';
import { UseCasesComponent } from '../use-cases/use-cases.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        AboutComponent,
        ProductsComponent,
        TechnologyComponent,
        UseCasesComponent
    ],
    template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-products></app-products>
    <app-technology></app-technology>
    <app-use-cases></app-use-cases>
  `
})
export class HomeComponent { }
