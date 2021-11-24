import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-author-details',
  templateUrl: './post-author-details.component.html',
  styleUrls: ['./post-author-details.component.scss'],
})
export class PostAuthorDetailsComponent implements OnInit {
  @Input() author!: any;
  constructor() {}

  ngOnInit(): void {}
}
