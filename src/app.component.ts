
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    TechnologyComponent,
    UseCasesComponent,
    FooterComponent
  ],
})
export class AppComponent {}
