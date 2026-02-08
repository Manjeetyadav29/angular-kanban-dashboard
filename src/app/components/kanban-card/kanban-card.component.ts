import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Task } from "../../models/task.model";

@Component({
  selector: "app-kanban-card",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./kanban-card.component.html",
  styleUrls: ["./kanban-card.component.css"],
})
export class KanbanCardComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskUpdated = new EventEmitter<{
    taskId: string;
    updates: Partial<Task>;
  }>();

  isEditing = false;
  editedTitle = "";

  startEdit() {
    this.isEditing = true;
    this.editedTitle = this.task.title;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editedTitle = "";
  }

  saveEdit() {
    if (this.editedTitle.trim()) {
      this.taskUpdated.emit({
        taskId: this.task.id,
        updates: { title: this.editedTitle.trim() },
      });
    }
    this.isEditing = false;
  }

  deleteTask(event: Event) {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this task?")) {
      this.taskDeleted.emit(this.task.id);
    }
  }

  getPriorityColor(): string {
    switch (this.task.priority) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#10b981";
      default:
        return "#6b7280";
    }
  }

  getStatusColor(): string {
    switch (this.task.status) {
      case "todo":
        return "#0ea5e9";
      case "inProgress":
        return "#f59e0b";
      case "done":
        return "#10b981";
      default:
        return "#6b7280";
    }
  }

  isOverdue(): boolean {
    if (!this.task.dueDate) {
      return false;
    }
    return new Date(this.task.dueDate) < new Date();
  }
}
