# Setup Guide - Angular 19 Kanban Dashboard

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v9.x or higher) - Comes with Node.js
- **Angular CLI** (v19.x) - Install globally

## Step-by-Step Setup

### 1. Install Angular CLI Globally

```bash
npm install -g @angular/cli@19
```

Verify installation:
```bash
ng version
```

### 2. Navigate to Project Directory

```bash
cd angular-kanban-v19
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Angular 19 framework
- Angular CDK for drag-and-drop
- TypeScript
- Development tools

### 4. Start Development Server

```bash
npm start
```

Or:
```bash
ng serve
```

The application will be available at: `http://localhost:4200`

### 5. Open in Browser

Navigate to `http://localhost:4200` in your web browser.

## Alternative Commands

### Development Server with Custom Port

```bash
ng serve --port 4300
```

### Development Server with Auto-Open Browser

```bash
ng serve --open
```

### Build for Production

```bash
npm run build
```

Or:
```bash
ng build --configuration production
```

Output will be in the `dist/` folder.

## Troubleshooting

### Port Already in Use

If port 4200 is already in use, try:
```bash
ng serve --port 4300
```

### Node Version Issues

If you encounter issues, ensure Node.js version is 18+:
```bash
node --version
```

### Clear npm Cache

If installation fails:
```bash
npm cache clean --force
npm install
```

### Reinstall Dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Tips

### Hot Reload
The development server supports hot reload. Any changes you make will automatically refresh the browser.

### Component Generation
To create new components:
```bash
ng generate component components/my-component --standalone
```

### Service Generation
To create new services:
```bash
ng generate service services/my-service
```

## Project Features

### Standalone Components
This project uses Angular 19's standalone components architecture. No NgModule files are needed!

### Signals
State management uses Angular's Signals API for reactive, efficient updates.

### Modern Syntax
Uses the new `@if`, `@for` control flow syntax instead of `*ngIf`, `*ngFor`.

## Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Explore the application
4. ✅ Try adding, editing, and moving tasks
5. ✅ Customize colors and styling
6. ✅ Build for production

## Support

For issues or questions:
- Check the README.md file
- Review Angular documentation: https://angular.dev
- Check Angular CDK docs: https://material.angular.io/cdk

Happy coding! 🚀
