import { Routes } from '@angular/router'

import { AppComponent } from '@app/app.component'
import { HomeComponent } from '@pages/home/home'
import { AdoptionsComponent } from '@pages/adoptions/adoptions'

export const routes: Routes = [
  {
	path: '',
	component: AppComponent,
    children: [
      {
	    path: '',
	    component: HomeComponent,
        pathMatch: 'full',
      },
      {
	    path: 'adopciones',
	    component: AdoptionsComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
]
