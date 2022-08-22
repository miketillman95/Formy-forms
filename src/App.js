import { Link } from "react-router-dom";
import React, {useState} from 'react'


function App(props) {
  
  const [choreLogs, setChoreLogs] = useState([])
  // adds chorelog
    const addChoreLog= (log) => {
      let logs = [...choreLogs, log]
      setChoreLogs(logs)
    }
  
 

  return (
    <>
      <h1> All me types of forms mate</h1>
      <section>
        <div className='list-container'>
          <div className='chore-header'>
                </div>

              <nav>
                <Link addChoreLog={addChoreLog} to='/chores'>Chore List</Link>
                <br/>
                <Link chore={choreLogs} to='/chorechart'>Chore Chart</Link>

                {console.log(addChoreLog)}
                <br/>
              </nav>
        </div>
      </section>
    </>
  );
}

export default App;




