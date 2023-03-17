import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todotask:any
  constructor(private auth:AuthService,private router:Router) { }
  data:any
  ngOnInit(): void {
  }

addit(){
  this.data={
      "todo_name": this.todotask
    }
 
  this.auth.addit(this.data).subscribe((res)=>this.router.navigate(['view']))
}
}
