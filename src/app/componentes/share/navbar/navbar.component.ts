import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',  
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = [
    {name:"Página principal",route:"",icon:"home"},
    {name:"Realizar búsqueda",route:"search",icon:"search"}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
  }

   


  ngOnInit(): void {
  }

}
