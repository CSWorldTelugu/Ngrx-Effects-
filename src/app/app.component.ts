import { Component,OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from './user.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  users =[];
  error=false;

 constructor(private store:Store<any>){
  


 }
 ngOnInit(): void {
  this.store.dispatch(getUsers());
  this.store.select('users').subscribe(
    data=>{
      this.users=data.users;
      this.error = data.apiError
     
    }
  )
 }
  
}






