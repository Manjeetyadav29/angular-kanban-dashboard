# Angular 19 Kanban Dashboard

A modern, feature-rich Kanban board built with Angular 19, featuring drag-and-drop functionality, responsive design, and a beautiful UI.

## 🚀 Features

- ✅ **Angular 19** - Latest version with standalone components
- ✅ **Drag & Drop** - Powered by Angular CDK
- ✅ **Modern Control Flow** - Uses `@if`, `@for` syntax
- ✅ **Signals** - Reactive state management with Angular Signals
- ✅ **Standalone Components** - No NgModules required
- ✅ **Add/Edit/Delete Tasks** - Full CRUD operations
- ✅ **Inline Editing** - Double-click task titles to edit
- ✅ **Priority Badges** - Visual priority indicators (Low, Medium, High)
- ✅ **Due Dates** - Track task deadlines with overdue warnings
- ✅ **Assignees** - Assign tasks to team members
- ✅ **Comments Counter** - Track task discussions
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Beautiful UI** - Modern, clean interface with smooth animations

## 📋 Requirements

- Node.js 18.x or higher
- npm 9.x or higher
- Angular CLI 19.x

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

## 🎯 Usage

### Adding Tasks
- Click the "+" button in the column header
- Or click "Add Card" button below the column title
- Fill in task details and click "Add Task"

### Moving Tasks
- Drag tasks between columns to change their status
- Tasks automatically update when dropped in a new column

### Editing Tasks
- Double-click on any task title to edit it inline
- Press Enter to save or Escape to cancel

### Deleting Tasks
- Click the red "X" button on any task card
- Confirm deletion in the dialog

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── kanban-board/          # Main board container
│   │   ├── kanban-column/         # Column component
│   │   ├── kanban-card/           # Task card component
│   │   └── add-task-modal/        # Modal for adding tasks
│   ├── models/
│   │   └── task.model.ts          # TypeScript interfaces
│   ├── services/
│   │   └── kanban.service.ts      # State management with signals
│   └── app.component.ts           # Root component
├── index.html
├── main.ts
└── styles.css
```

## 🎨 Customization

### Changing Column Colors
Edit the colors in `kanban.service.ts`:

```typescript
columns = computed<Column[]>(() => {
  return [
    {
      id: 'todo',
      title: 'Todo',
      color: '#0ea5e9',  // Change this
      tasks: tasks.filter(task => task.status === 'todo')
    },
    // ...
  ];
});
```

### Adding New Priority Levels
Update the `TaskPriority` type in `models/task.model.ts` and adjust the `getPriorityColor()` method in `kanban-card.component.ts`.

## 🔧 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Breakpoints

- Desktop: > 768px (horizontal layout)
- Mobile/Tablet: ≤ 768px (vertical stacked layout)

## 🧪 Technologies Used

- **Angular 19** - Framework
- **TypeScript 5.5** - Language
- **Angular CDK** - Drag and Drop
- **Signals API** - Reactive state management
- **Standalone Components** - Modern Angular architecture
- **CSS3** - Styling with animations

## 📝 Key Angular 19 Features Demonstrated

1. **Standalone Components** - No NgModule required
2. **New Control Flow** - `@if`, `@for`, `@switch` syntax
3. **Signals** - Modern reactive state management
4. **Computed Signals** - Derived reactive values
5. **Input/Output Decorators** - Component communication
6. **Angular CDK** - Material Design components

## 🎓 Learning Resources

- [Angular Documentation](https://angular.dev)
- [Angular CDK](https://material.angular.io/cdk/categories)
- [Signals Guide](https://angular.dev/guide/signals)

## 📄 License

MIT License - feel free to use this project for learning or production!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Built with ❤️ using Angular 19
