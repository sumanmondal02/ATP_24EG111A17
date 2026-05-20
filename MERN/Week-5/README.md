### Imperative Programming --> Using Vanilla JS is one of the most hard coded way to code as we have to mention each and every instruction manually which become way too dificult to code as each instruction has to be passed by the developer for example Mother get me coffee she will directly execute the task but if the same task is given to a robot we need to specift first go to kitchen then take a vesseel pour milk turn on gas add coffee wait till boil turn off gas and pour in a cup and bring it.

### Hence new way, Declarative Coding. --> ReactJS
### every browser has a DOM which is in tree structure whenever there is Direct DOM Manipulation i.e, Removal of node or addition of node the browser memory has to restructure the entire DOM which is a time consuming process if its a dense tree hence React JS creates a copy of virtual DOM of the Tree in the browser and with whatever user input is given it makes the changes in the system memory which is faster than browser memory and then compares and make changes

### Two ways to use React --> CRA by Facebook but no maintenance hence use Vite
###     npm create vite@latest

<!-- sumanmondal@Sumans-MacBook-Pro react-app-1 % npm create vite@latest
> npx
> create-vite
│
◇  Project name:
│  .
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/sumanmondal/Documents/VS Code/ATP/MERN/26-03-18/react-app-1...
│
◇  Installing dependencies with npm...

added 152 packages, and audited 153 packages in 11s

36 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> react-app-1@0.0.0 dev
> vite

  VITE v8.0.0  ready in 628 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help -->

  ### remove ../assets/ clean up App.css App.jsx and index.css remove everything 


    npm install react-router 

  <!-- /* <h1 className="text-5xl">My First React App</h1>
      <h2>Username: {username}</h2>
      <h3>Person Details:</h3>
      <p>Phone: {person.pno}</p>
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
      {
        marks.map((m,index)=><h2 key={index}>{m}</h2>)
      } */ -->



**MERN — React Learning Projects (26-03-18)**

**Overview:**
- **Purpose:** This folder contains several small React projects scaffolded with Vite. It's designed for learning React fundamentals and common front-end workflows: components, props, state and hooks, routing, layouts, lists, styling, and basic project setup with Vite.

**What I Learnt:**
- **React basics:** components, JSX, props, and composition.
- **State & effects:** `useState`, `useEffect` and local component state patterns.
- **Lists & keys:** rendering arrays, mapping and using `key` correctly.
- **Routing & layouts:** multi-page routing patterns (examples in `react-app-3`).
- **Styling:** using plain CSS and Tailwind utility classes (seen in some apps).
- **Project tooling:** scaffolding with Vite, dev server (`npm run dev`), build and preview scripts.

**Projects in this folder:**
- **react-app-1:** Beginner app showing simple components, props and a `Product` component pattern. See [react-app-1/README.md](react-app-1/README.md).
- **react-app-2:** Examples including `Counter`, `Users`, `NavBar` and `UsersList` — demonstrates state management, component composition and Tailwind usage. See [react-app-2/package.json](react-app-2/package.json).
- **react-app-3:** Multi-page example with `Header`, `Footer`, `Home`, `Login`, `Register` and other pages — useful to learn routing and layout composition.

**Folder structure (high level):**
- **react-app-1/** — basic examples and `src/components/Product.jsx`.
- **react-app-2/** — `src/components/Counter.jsx`, `Users.jsx`, `NavBar.jsx`, `UsersList.jsx`.
- **react-app-3/** — multi-page examples and `Root_Layout.jsx`.