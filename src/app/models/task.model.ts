export type TaskStatus = 'todo' | 'inProgress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: string;
  dueDate?: Date;
  createdAt: Date;
  comments: number;
}

export interface Column {
  id: TaskStatus;
  title: string;
  color: string;
  tasks: Task[];
}
