import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/core/models/post';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  @Input() post!: any;

  constructor() {}

  ngOnInit(): void {}
}
