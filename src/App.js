import React from 'react';
import TaskList from './components/TaskList';
import backgroundImg from './background.jpg'; // 

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1>Lista de Tarefas</h1>
      <TaskList />
      <footer style={{ marginTop: '20px' }}>© Jorge Fortes</footer>
    </div>
  );
}

export default App;
