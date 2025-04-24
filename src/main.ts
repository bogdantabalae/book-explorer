import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, Routes } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';

// Adding necessary imports
import { HomeComponent } from './app/pages/home/home.component';
import { BookListComponent } from './app/pages/book-list/book-list.component';
import { BookDetailComponent } from './app/pages/book-detail/book-detail.component';
import { ProfileComponent } from './app/pages/profile/profile.component';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ],
});
