import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }
  tododata:any
  ngOnInit(): void {
    this.GetallTask();
  }

  deleteit(id:any){
    this.auth.deleteit(id).subscribe((res)=>    this.ngOnInit()
    
    )

  }

  GetallTask(){
    console.log("hello")
    return this.auth.displayall().subscribe((res)=>this.tododata=res)
  }

}
