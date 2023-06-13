import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  heraldry:any;
  formApps= {
    title: '',
    description: '', 
    price:" ",
    image: ''
  };


  constructor(public service:TaskService, private route: Router ) { }
  
  ngOnInit() {}

  crearEscudo(){
    this.service.saveTask(this.formApps)
    .subscribe(data => {
      this.heraldry=data;
      console.log(this.heraldry)
      
    })
  
  
}}


