import { bootstrapApplication } from '@angular/platform-browser';
import { pcConfig } from './app/pc.config';
import { Pc } from './app/pc';

bootstrapApplication(Pc, pcConfig)
  .catch((err) => console.error(err));
