import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private route:Router){}
  ngOnInit(): void {
  
    this.route.navigate(['/inicio'])
  }
  title = 'BGasociados';
  showMenu:Boolean

  controlMenu(){
    if(!this.showMenu){
      var menu=document.getElementById('nav-bar')
      menu?.classList.add('disable')
      this.showMenu=true
    }
    else{
      var menu=document.getElementById('nav-bar')
      menu?.classList.remove('disable')
      this.showMenu=false
    }
  }




}
