import { Component, OnInit } from '@angular/core';
import { BlogList } from '../list/blog.list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  list = BlogList;
  constructor() { }

  ngOnInit() {
    // console.log(this.list);
    // console.log(`/home/blog${this.list[0].router}`);
  }

}
