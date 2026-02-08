import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Column, Task } from '../../models/task.model';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, DragDropModule, KanbanCardComponent],
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css']
})
export class KanbanColumnComponent {
  @Input() column!: Column;
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskUpdated = new EventEmitter<{ taskId: string; updates: Partial<Task> }>();
  @Output() addTaskClicked = new EventEmitter<void>();
  @Output() taskDropped = new EventEmitter<CdkDragDrop<Task[]>>();

  onTaskDelete(taskId: string) {
    this.taskDeleted.emit(taskId);
  }

  onTaskUpdate(taskId: string, updates: Partial<Task>) {
    this.taskUpdated.emit({ taskId, updates });
  }

  onAddTask() {
    this.addTaskClicked.emit();
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    this.taskDropped.emit(event);
  }

  getConnectedLists(): string[] {
    return ['todo-list', 'inProgress-list', 'done-list'];
  }
}
