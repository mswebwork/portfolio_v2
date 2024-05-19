import { Component } from '@angular/core';
import {BoxiconComponent} from "../../utils/boxicons.component";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {share, tap} from "rxjs";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BoxiconComponent,
    RouterLinkActive,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public route: ActivatedRoute){}

  // I method
  activeFragment = this.route.fragment.pipe(
    share()
    // ,tap(console.log)
  );

  // II method
  isSectionActive(section: string): boolean {
    let element = false;
    this.route.fragment.subscribe((fragment) => {
      element = fragment === section.split("#").pop();
    });
    return element;
  }

}
