import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  privateTasks = [];
  heraldry:any;
  formApps= {

    title: '',
    description: '', 
    price:" ",
    image: ''
  };
  blazon: any;
  id:any;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getPrivateTasks()
      .subscribe(
        res => this.privateTasks = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        }
      )
  }

  crearEscudo(){
    this.taskService.saveTask(this.formApps)
    .subscribe(data => {
      this.heraldry=data;
      console.log(this.heraldry)
      this.router.navigate(['/']);
    })
}
getBlazonDetails(id: any) {
  this.taskService.getTaskId(id)
  .subscribe(data => {
    this.blazon= data;
  })
}

}
