import Employee from './components/employee';
import './index.css';
import {useState} from 'react' ; 

function App() {
  const [role , setRoles] = useState('dev') ; 
  console.log(" list the employee")
  const showEmoployees = true ; 
  return (
    <div className="App ">
     
      {showEmoployees ? (
        <>
        <input type="text" onChange={(e)=>
        {
          
          console.log(e.target.value);
          setRoles(e.target.value); 
        }} />

              <div className='flex flex-wrap justify-center'>
              <Employee name="Briejsh" role="intern" img="https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
              <Employee name = "Era" role={role}/>
              <Employee name = "Rista" />
              <Employee name = "Rista" />
              <Employee name = "Rista" />
              <Employee name = "Rista" />

              </div>


 
      </>
      ): <p> no employee</p>
      }
    </div>
  );
}

export default App;
