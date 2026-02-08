import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskStatus, TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {
  @Input() columnId: TaskStatus = 'todo';
  @Output() taskAdded = new EventEmitter<Omit<Task, 'id' | 'createdAt'>>();
  @Output() closeModal = new EventEmitter<void>();

  taskTitle = '';
  taskDescription = '';
  taskPriority: TaskPriority = 'medium';
  taskAssignee = '';
  taskDueDate = '';

  onSubmit() {
    if (!this.taskTitle.trim()) {
      return;
    }

    const newTask: Omit<Task, 'id' | 'createdAt'> = {
      title: this.taskTitle.trim(),
      description: this.taskDescription.trim() || undefined,
      status: this.columnId,
      priority: this.taskPriority,
      assignee: this.taskAssignee.trim() || undefined,
      dueDate: this.taskDueDate ? new Date(this.taskDueDate) : undefined,
      comments: 0
    };

    this.taskAdded.emit(newTask);
    this.resetForm();
  }

  onCancel() {
    this.resetForm();
    this.closeModal.emit();
  }

  resetForm() {
    this.taskTitle = '';
    this.taskDescription = '';
    this.taskPriority = 'medium';
    this.taskAssignee = '';
    this.taskDueDate = '';
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
}
