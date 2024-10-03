# Media Dashboard Project

## Live Demo

[View the live project here](https://coming-soon.com)

### Introduction

This project is a media dashboard application built using React and TypeScript. It allows users to view, filter, and interact with media items. The project uses React’s Context API for global state management and TypeScript for type safety and code quality.

### Project Structure

Project structure follows a modular approach, separating concerns across components, contexts, services, and static assets. This structure allows for better maintainability, scalability, and easier testing.

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── placeholder.svg
│   ├── components/
│   │   ├── ErrorBoundary/
│   │   │   └── ErrorBoundary.tsx
│   │   ├── FilterBar/
│   │   │   ├── FilterBar.tsx
│   │   │   └── FilterBar.css
│   │   ├── LoadingBar/
│   │   │   ├── LoadingBar.tsx
│   │   │   └── LoadingBar.css
│   │   ├── MediaCard/
│   │   │   ├── MediaCard.tsx
│   │   │   └── MediaCard.css
│   │   ├── MediaList/
│   │   │   ├── MediaList.tsx
│   │   │   └── MediaList.css
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   └── Modal.css
│   │   └── ErrorMessage/
│   │       ├── ErrorMessage.tsx
│   │       └── ErrorMessage.css
│   ├── contexts/
│   │   ├── MediaContext.tsx
│   │   └── FilterContext.tsx
│   ├── services/
│   │   └── mediaService.ts
│   ├── types.ts
│   ├── index.tsx
│   ├── App.tsx
│   ├── setupTests.ts
│   └── reportWebVitals.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Folders and Files Explained

`src/assets/`

Contains static assets such as images or other media. In this case, a placeholder image is stored for use when media content isn’t available.

`src/components/`

This directory contains all the React components. Components are organized by their functionality, each having its own subfolder. The separation of components helps in keeping the codebase modular and easier to maintain. Each component typically has its .tsx file for logic and rendering, and a .css file for styling.

* ErrorBoundary: Provides a catch-all for rendering errors in the React tree.
* FilterBar: A component that allows users to filter the media list by category, status, or language.
* LoadingBar: Displays a loading animation when data is being fetched.
* MediaCard: Displays information for a single media item.
* MediaList: Renders a list of media items based on the current filter.
* Modal: A reusable modal component for editing media or displaying messages.
* ErrorMessage: A component to display error messages in the UI.

`src/contexts/`

Contains the global state management using React’s Context API. Contexts allow different parts of the application to access shared state without prop drilling.

* MediaContext.tsx: Manages the state for media items. This includes fetching media data and handling loading and error states.
* FilterContext.tsx: Manages the state for the filter criteria. This allows users to filter media by category, status, or language across the app.

`src/services/`

Contains the logic for making API calls or other data-fetching operations.

* mediaService.ts: Abstracts the API calls related to media fetching. This ensures that all media-related data fetching is handled in one place, making it easier to manage and test.

`src/`

* index.tsx: Entry point for the application. It renders the App component inside React.StrictMode and wraps it with context providers.
* App.tsx: Root component that contains the main layout of the application, including the FilterBar and MediaList components.
* types.ts: Contains TypeScript interfaces and types used throughout the project. This helps in maintaining type safety and improving code quality.
* setupTests.ts: Sets up the testing environment for React components using Jest.
* reportWebVitals.ts: Performance measurement utility that can be used to track and report app performance metrics.

### Reasoning Behind the Structure

#### Component-Based Architecture

Each UI element or feature in the application is encapsulated as a self-contained component. This structure promotes reusability and modularity, making it easy to update or replace individual components without affecting other parts of the application.

#### Context API for Global State

MediaContext and FilterContext are used to manage global state. Contexts are ideal for managing state that needs to be accessed or updated by multiple components (e.g., media data and filters). This prevents ***prop drilling*** (passing props through multiple layers of components) and keeps the code clean and manageable.

#### Services Layer for API Calls

`mediaService.ts` file separates the logic for fetching media data from the components. This makes the components simpler, more focused on rendering, and easier to test. It also adheres to the single responsibility principle by abstracting data-fetching logic into its own module.

#### TypeScript for Type Safety

TypeScript is used throughout the project to provide static typing. This helps catch errors early during development and ensures that components and services adhere to the expected data shapes. The `types.ts` file centralizes all type definitions, which are used across the application, ensuring consistency and reducing the risk of runtime errors.

### How to Run the Project

#### Prerequisites

* Node.js (>=14.x)
* npm or yarn

### Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/your-repo/media-dashboard.git
cd media-dashboard
npm install
```

### Running the Application

To start the development server:
```bash
npm start
```

This will open the app in development mode at http://localhost:3000.

### Running Tests

To run the test suite:
```bash
npm test
```

### Future Improvements

* State Management: As the project grows, consider switching from Context API to a state management library like Redux or Zustand for better performance and scalability.
* Error Handling: Improve error handling in services by implementing retry logic or more granular error messages.
* Pagination and Caching: Implement pagination or infinite scrolling for the media list and add caching mechanisms to avoid fetching the same data multiple times.