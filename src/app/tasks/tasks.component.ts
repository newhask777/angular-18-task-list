import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of angular',
      dueDate: '2025-01-31'
    },
     {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular 2',
      summary: '2 Learn all the basic and advanced features of angular',
      dueDate: '2025-01-23'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

}
