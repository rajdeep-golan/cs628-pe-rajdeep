// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css'; // Assuming you still have App.css for general app styling
import Resume from './Resume'; // Import the Resume component [cite: 51]
import './Resume.css'; // Import the Resume CSS [cite: 51]

function App() {
  return (
    <div className="App">
      <Resume /> {/* Render the Resume component */}
    </div>
  );
}

export default App;