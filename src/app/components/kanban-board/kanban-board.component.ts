import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  CdkDragDrop,
  DragDropModule,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { KanbanService } from "../../services/kanban.service";
import { Task, TaskStatus } from "../../models/task.model";
import { KanbanColumnComponent } from "../kanban-column/kanban-column.component";
import { AddTaskModalComponent } from "../add-task-modal/add-task-modal.component";

@Component({
  selector: "app-kanban-board",
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    KanbanColumnComponent,
    AddTaskModalComponent,
  ],
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent {
  kanbanService = inject(KanbanService);
  columns = this.kanbanService.columns;
  showAddTaskModal = false;
  selectedColumnId: TaskStatus = "todo";

  onDrop(event: CdkDragDrop<Task[]>, newStatus: TaskStatus) {
    if (event.previousContainer === event.container) {
      // Same column - reorder (not implementing reorder for now)
      return;
    } else {
      // Different column - move task
      const task = event.previousContainer.data[event.previousIndex];
      this.kanbanService.moveTask(task.id, newStatus);
    }
  }

  openAddTaskModal(columnId: TaskStatus) {
    this.selectedColumnId = columnId;
    this.showAddTaskModal = true;
  }

  closeAddTaskModal() {
    this.showAddTaskModal = false;
  }

  onTaskAdded(task: Omit<Task, "id" | "createdAt">) {
    this.kanbanService.addTask(task);
    this.closeAddTaskModal();
  }

  onTaskDeleted(taskId: string) {
    this.kanbanService.deleteTask(taskId);
  }

  onTaskUpdated(taskId: string, updates: Partial<Task>) {
    this.kanbanService.updateTask(taskId, updates);
  }
}
