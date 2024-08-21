import { TasksService } from './../tasks.service';
import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private TasksService = inject(TasksService);

onCompleteTask(){
  this.TasksService.removeTask(this.task.id);
}

}
