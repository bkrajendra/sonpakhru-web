import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlasherComponent } from './components/flasher/flasher.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'flasher', component: FlasherComponent },
    { path: '**', redirectTo: '' }
];
