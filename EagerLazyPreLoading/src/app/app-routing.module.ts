import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { Module1Component } from './module1/module1.component';
import { Module1Module } from './module1/module1.module';
import { Module2Component } from './module2/module2.component';
import { Module2Module } from './module2/module2.module';
import { PreLoadCustomStrategy } from './PreLoadCustomStrategy';

// Eager Loading Routes
const routesEL: Routes = [
  { path: '', component: AppComponent },
  { path: 'module1', component: Module1Component },
  { path: 'module2', component: Module2Component }
];

// Lazy Loading Routes
const routesLL: Routes = [
  { path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module),
    data: { preload: true, delay: true, time: 5000 }
  },
  { path: 'module2', loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module),
    data: { preload: false, delay: false, time: 0 }
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routesLL)],

  // Eager Loading exports
  //exports: [RouterModule, Module1Module, Module2Module]

  // Lazy Loading exports
  exports: [RouterModule],

  // Pre-Loading imports
  imports: [RouterModule.forRoot(routesLL, { preloadingStrategy: PreLoadCustomStrategy })]

})
export class AppRoutingModule { }
