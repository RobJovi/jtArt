import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public search = 'All';
  public filter = '';
  public storeArray = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jtart-server.herokuapp.com/getStore')
      .subscribe((response: any) => {
        // res is the name you can give it. you can also name it response or whatever //
        console.log(response);
        this.storeArray = response;
        // then you write a function to throw if there is an error //
      }, (error) => {
        console.log(error);
      });
    // ^this is a note to tell it to listen. or grab data//
  }


changeCategory() {
  if (this.search === 'All') {
    this.filter = '';
  } else {
    this.filter = this.search;
  }

  console.log(this.filter);
}
}
