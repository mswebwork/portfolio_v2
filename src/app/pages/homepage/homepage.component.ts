import { Component } from '@angular/core';
import {HomeComponent} from "../../components/home/home.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HomeComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
