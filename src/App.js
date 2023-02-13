import Employee from './components/employee';
import './App.css';
import {useState} from 'react' ; 

function App() {
  const [role , setRoles] = useState('dev') ; 
  console.log(" list the employee")
  const showEmoployees = true ; 
  return (
    <div className="App">
     
      {showEmoployees ? (
        <>
        <input type="text" onChange={(e)=>
        {
          
          console.log(e.target.value);
          setRoles(e.target.value); 
        }} />
      <Employee name="brijesh" role="intern"/>
      <Employee name = "era" role={role}/>
      <Employee name = "ram" />

      </>
      ): <p> no employee</p>}
    </div>
  );
}

export default App;
