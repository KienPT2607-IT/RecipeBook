import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logo: string = '../../../assets/icons/vietnam-flag-icon.svg';
  caretDownIcon: string =
    '.././../../assets/icons/caret-down-thin-svgrepo-com.svg';
}
