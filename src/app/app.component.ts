import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  lastPage = 0;
  updateCurrentPage(pageNo: number) {
    this.currentPage = pageNo;
  }
  preNextUpdate(btnType: string) {
    if (btnType === 'pre') {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
    if (btnType === 'next') {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      }
    }
  }
  getLastPage(lastpageno: number) {
    this.lastPage = lastpageno;
  }
  getDisable(btnName: string) {
    if (this.currentPage == 0 && btnName === 'pre') {
      return 'disabled';
    }
    if (this.currentPage == this.lastPage && btnName === 'next') {
      return 'disabled';
    }
  }
  getWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
  images = [
    {
      title: 'My CAT',
      url:
        'https://images.unsplash.com/photo-1616074995820-be2be3f4487a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'This is Goa',
      url:
        'https://images.unsplash.com/photo-1615912844755-bd8b6dd6789e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'This is beautiful',
      url:
        'https://images.unsplash.com/photo-1616067064617-31a11565509d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'My Desk',
      url:
        'https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
}
