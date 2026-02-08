import { Injectable, signal, computed } from '@angular/core';
import { Task, TaskStatus, Column } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  // Signal for all tasks
  private tasksSignal = signal<Task[]>([
    {
      id: '1',
      title: 'Create initial project plan',
      description: 'Define project scope and requirements',
      status: 'todo',
      priority: 'high',
      assignee: 'John Doe',
      dueDate: new Date('2026-02-15'),
      createdAt: new Date(),
      comments: 2
    },
    {
      id: '2',
      title: 'Design landing page',
      description: 'Create wireframes and mockups',
      status: 'todo',
      priority: 'medium',
      assignee: 'Jane Smith',
      dueDate: new Date('2026-02-20'),
      createdAt: new Date(),
      comments: 0
    },
    {
      id: '3',
      title: 'Review codebase structure',
      description: 'Analyze current architecture',
      status: 'todo',
      priority: 'low',
      assignee: 'Mike Johnson',
      dueDate: new Date('2026-02-25'),
      createdAt: new Date(),
      comments: 1
    },
    {
      id: '4',
      title: 'Implement authentication',
      description: 'Add login and signup functionality',
      status: 'inProgress',
      priority: 'high',
      assignee: 'Sarah Davis',
      dueDate: new Date('2026-02-18'),
      createdAt: new Date(),
      comments: 5
    },
    {
      id: '5',
      title: 'Set up database schema',
      description: 'Design and implement database structure',
      status: 'inProgress',
      priority: 'high',
      assignee: 'Tom Wilson',
      dueDate: new Date('2026-02-16'),
      createdAt: new Date(),
      comments: 3
    },
    {
      id: '6',
      title: 'Fix navbar bugs',
      description: 'Resolve responsive issues',
      status: 'inProgress',
      priority: 'medium',
      assignee: 'Emily Brown',
      dueDate: new Date('2026-02-14'),
      createdAt: new Date(),
      comments: 1
    },
    {
      id: '7',
      title: 'Organize project repository',
      description: 'Structure folders and files properly',
      status: 'done',
      priority: 'low',
      assignee: 'Alex Lee',
      dueDate: new Date('2026-02-10'),
      createdAt: new Date(),
      comments: 0
    },
    {
      id: '8',
      title: 'Write API documentation',
      description: 'Document all endpoints and responses',
      status: 'done',
      priority: 'medium',
      assignee: 'Chris Taylor',
      dueDate: new Date('2026-02-12'),
      createdAt: new Date(),
      comments: 2
    }
  ]);

  // Computed signals for columns
  columns = computed<Column[]>(() => {
    const tasks = this.tasksSignal();
    return [
      {
        id: 'todo',
        title: 'Todo',
        color: '#0ea5e9',
        tasks: tasks.filter(task => task.status === 'todo')
      },
      {
        id: 'inProgress',
        title: 'In Progress',
        color: '#f59e0b',
        tasks: tasks.filter(task => task.status === 'inProgress')
      },
      {
        id: 'done',
        title: 'Done',
        color: '#10b981',
        tasks: tasks.filter(task => task.status === 'done')
      }
    ];
  });

  // Get all tasks
  getTasks() {
    return this.tasksSignal();
  }

  // Add new task
  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: this.generateId(),
      createdAt: new Date()
    };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
  }

  // Update task
  updateTask(id: string, updates: Partial<Task>) {
    this.tasksSignal.update(tasks =>
      tasks.map(task => task.id === id ? { ...task, ...updates } : task)
    );
  }

  // Delete task
  deleteTask(id: string) {
    this.tasksSignal.update(tasks => tasks.filter(task => task.id !== id));
  }

  // Move task to different status
  moveTask(taskId: string, newStatus: TaskStatus) {
    this.updateTask(taskId, { status: newStatus });
  }

  // Generate unique ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
