import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent},
  { path: 'profile', component: ProfileComponent }
];
