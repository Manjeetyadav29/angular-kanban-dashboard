import { Component } from '@angular/core';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KanbanBoardComponent],
  template: `<app-kanban-board></app-kanban-board>`,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'Angular 19 Kanban Dashboard';
}
