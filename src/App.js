import Employee from './components/employee';
import './App.css';

function App() {
  console.log(" list the employee")
  const showEmoployees = false ; 
  return (
    <div className="App">
     
      {showEmoployees ? <Employee/> : <p> no employee</p>}
    </div>
  );
}

export default App;
