import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // Alternative to constructor based approach for injection.
  private tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
   this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  }, this.userId);
  this.close.emit();
}
}