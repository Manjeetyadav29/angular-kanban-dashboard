import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { products } from '../products';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: Date;
  status: 'pending' | 'inProgress' | 'completed';
  comments: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  searchText: string = '';
  selectedUser: string = 'All';
  users: string[] = ['All', 'Advik', 'Alex', 'Sarah'];

  pendingTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];

  allTasks: Task[] = [
    {
      id: 1,
      title: 'task new',
      description: 'new landing page',
      assignee: 'Advik',
      priority: 'LOW',
      dueDate: new Date('2026-01-23'),
      status: 'pending',
      comments: 0,
    },
    {
      id: 2,
      title: 'Api integration',
      description: 'Integrate Payment',
      assignee: 'Alex',
      priority: 'HIGH',
      dueDate: new Date('2026-01-20'),
      status: 'pending',
      comments: 0,
    },
    {
      id: 3,
      title: 'new task text image',
      description: 'upload image',
      assignee: 'Alex',
      priority: 'LOW',
      dueDate: new Date('2026-01-21'),
      status: 'inProgress',
      comments: 0,
    },

    {
      id: 4,
      title: 'Database updatation ',
      description: 'update database values',
      assignee: 'Sarah',
      priority: 'MEDIUM',
      dueDate: new Date('2026-01-19'),
      status: 'inProgress',
      comments: 0,
    },

    {
      id: 5,
      title: 'Fixed Bugs Compeled',
      description: 'fixed issues Success',
      assignee: 'Advik',
      priority: 'HIGH',
      dueDate: new Date('2026-01-19'),
      status: 'completed',
      comments: 0,
    },
    {
      id: 6,
      title: 'Payment Compeled',
      description: 'Payment Success',
      assignee: 'Sarah',
      priority: 'LOW',
      dueDate: new Date('2026-01-19'),
      status: 'completed',
      comments: 0,
    },
  ];

  ngOnInit() {
    this.filterTasks();
  }

  filterTasks() {
    let filteredTasks = this.allTasks;
    if (this.selectedUser !== 'All') {
      filteredTasks = filteredTasks.filter(
        (task) => task.assignee === this.selectedUser
      );
    }

    if (this.searchText.trim()) {
      const search = this.searchText.toLowerCase();
      filteredTasks = filteredTasks.filter(
        (task) =>
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search)
      );
    }

    this.pendingTasks = filteredTasks.filter(
      (task) => task.status === 'pending'
    );
    this.inProgressTasks = filteredTasks.filter(
      (task) => task.status === 'inProgress'
    );
    this.completedTasks = filteredTasks.filter(
      (task) => task.status === 'completed'
    );
  }

  onDrop(
    event: CdkDragDrop<Task[]>,
    newStatus: 'pending' | 'inProgress' | 'completed'
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray =
        (event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      const taskIndex = this.allTasks.findIndex((t) => t.id === task.id);
      if (taskIndex !== -1) {
        this.allTasks[taskIndex].status = newStatus;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('Task ', this.allTasks[taskIndex]);
      console.log(`Task "${task.title}" moved to ${newStatus}`);
    }
  }

  onSearch() {
    this.filterTasks();
  }

  onUserChange() {
    this.filterTasks();
  }
}

// function transferArrayBetweenArrays(data: Task[], data1: Task[], previousIndex: number, currentIndex: number) {
//   throw new Error('Function not implemented.');
// }
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
