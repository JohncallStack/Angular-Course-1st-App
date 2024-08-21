import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
    declarations: [TasksComponent, TaskComponent, AddTaskComponent],
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [TasksComponent]
})
export class TasksModule{

}