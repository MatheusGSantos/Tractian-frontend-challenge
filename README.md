# Company Assets TreeView

This is a React-based application for visualizing and managing hierarchical data 
such as company assets and locations. This project demonstrates efficient tree 
structure rendering and filtering functionality with a focus on clean 
architecture and performance.

Originally was a technical challenge for a frontend position at Tractian, where 
an API should be consumed by the frontend and display locations, assets and
 components from available companies in a treeview. Requirements included no 
 ui components library should be used and the user should be able to filter
 the tree nodes based on certain aspects.

## Features

- Interactive TreeView for hierarchical data.
- Filter functionality to search and highlight nodes.
- Example dataset provided via `fake-db.json`.
- Styled with TailwindCSS for responsive design.
- Built with TypeScript for type safety.

## How to Run this Application

1. Clone this repository
2. Install project dependencies:
```bash
pnpm install
```
3. Set up a json-server mock api with:
```bash
pnpm run api
```
4. Create a `.env.local` file inside the project's root folder with the
 following content:
```env
VITE_API_URL="http://localhost:9999"
```
5. In another terminal, run:
```bash
pnpm run dev
```

## Usage
1. Open the app in your browser at http://localhost:3000.
2. Select one of the 3 companies available at the top right.
3. Use the TreeView to explore the hierarchical structure.
4. Apply filters or interact with the nodes to see dynamic updates.

## Tech Stack
- React
- TypeScript
- TailwindCSS
- Vite

