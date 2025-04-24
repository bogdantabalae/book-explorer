import { Component, OnInit } from '@angular/core';

// Adding the necessary imports
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
     IonicModule,
      RouterModule,
    ],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
