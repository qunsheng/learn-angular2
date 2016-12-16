import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { NgifComponent } from './ngif/ngif.component';

import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

export const router: Routes = [
    { path: '', redirectTo: 'summary', pathMatch: 'full'},
    { path: 'summary', component: SummaryComponent},
    { path: 'ngif', component:  NgifComponent},
    { path: 'ngswitch', component: NgSwitchComponent},
    { path: 'ngfor', component: NgForComponent},
    { path: 'ngclass', component: NgClassComponent},
    { path: 'ngstyle', component: NgStyleComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);