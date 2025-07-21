import { Routes } from '@angular/router';
import {ComponentList} from './component-list/component-list';
import {ComponentAbout} from './component-about/component-about';
import {HomePage} from './home-page/home-page';


export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: HomePage
  },
  {
    path: 'about',
    component: ComponentAbout
  }
];
