import { Component, OnInit } from '@angular/core';

// Adding the necessary imports
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Creating an interface to define the structure of the data types
interface Book {
  key: string;
  title: string;
  author_name: string[];
  cover_i?: number;
}

// Creating the structure for the API
interface OpenLibraryApi {
  works: Book[];
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule,],
})
export class BookListComponent  implements OnInit {
  books$: Observable<Book[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    // Initializing 'books$'
    this.books$ = this.http.get<OpenLibraryApi>('https://openlibrary.org/subjects/fiction.json').pipe(

    // Mapping the gathered data into the interface
    map(res => res.works.map((item: any) => ({
      key: item.key,
      title: item.title,
      author_name: item.author_name || [],
      cover_i: item.cover_i,
    })))
  );
  }
}
