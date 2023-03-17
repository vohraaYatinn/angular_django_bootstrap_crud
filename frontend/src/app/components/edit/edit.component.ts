import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todotask:any
  datatable:any
  id:any
  data:any
  constructor(private route:ActivatedRoute, private auth:AuthService,private rout:Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((res)=>
    this.id=res

    )
    this.fetchthis()
  }
  fetchthis(){
    this.auth.fetchthis(this.id.params.id).subscribe((res)=>this.datatable=res.todo_name)
  }
  editit(){
    this.data={
      "id": this.id.params.id,
      "todo_name": this.todotask
    }
    this.auth.editthis(this.data).subscribe((res)=>this.rout.navigate(['view']))
  }
 
}
