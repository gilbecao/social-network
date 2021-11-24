import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public darkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.darkMode = true;
      document.documentElement.setAttribute('data-color-theme', 'dark');
    } else {
      this.darkMode = false;
      document.documentElement.setAttribute('data-color-theme', 'light');
    }
  }

  public switchTheme(): void {
    this.darkMode = !this.darkMode;
    this.darkMode
      ? document.documentElement.setAttribute('data-color-theme', 'dark')
      : document.documentElement.setAttribute('data-color-theme', 'light');
  }
}
