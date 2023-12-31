# ATLAN SQL EDITOR

Atlan SQL Editor is a web based application to run SQL Queries and display results. The application includes an editor for writing SQL queries and includes features like importing data from files, storing previous queries and multi-tab support. The application is populated with sample data.

# Technology Used

1. React.js
2. TailwindCSS
3. @uiw/react-codemirror
4. FontAwesomeIcons(CDN)

# Performance

1. First tool that I used for testing the performance was Lighthouse which is included in the Developer Tools.
   <img src="https://i.ibb.co/3rCkcw4/Screenshot-from-2023-07-24-18-00-13.png">
   ![Lighthouse-2](https://i.ibb.co/nnNHwn7/Screenshot-from-2023-07-24-18-00-48.png)

3. Second tool which I used is a website called [GTmetrix](https://gtmetrix.com/)
   ![GTmetrix-1](https://i.ibb.co/qmd7nWM/Screenshot-from-2023-07-24-18-12-41.png)
   ![GTmetrix-2](https://i.ibb.co/ckzWDF2/Screenshot-from-2023-07-24-18-13-02.png)

# Optimisation

1. Extensive use of React.memo, useMemo and useCallback hook.
2. Used React's React.lazy() and Suspense to load components lazily, especially Editor component.

# Screenshots

| Homepage                                                                      | With Results                                                                      |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![Homepage](https://i.ibb.co/kMBdkR4/Screenshot-from-2023-07-24-17-26-49.png) | ![With Results](https://i.ibb.co/6n4YvV4/Screenshot-from-2023-07-24-17-26-59.png) |

# Getting Started

To get started and run the project locally, follow these steps:

1. Clone the repository:
```
git clone git@github.com:suveshmoza/atlan-sql-query.git
cd atlan-sql-query
```
2. Install the dependencies:
```
npm install
```
3. Start the development server:
```
npm run start
```
4. Open your browser and go to `http://localhost:3000` to see the app in action!
