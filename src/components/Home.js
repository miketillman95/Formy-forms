import { Link } from "react-router-dom";
import React, {useState} from 'react'



const Home = () => {
    const [choreLogs, setChoreLogs] = useState([])
  // adds chorelog
    const addChoreLog= (log) => {
      let logs = [...choreLogs, log]
      setChoreLogs(logs)
    }
  return (
    <div>
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

                <br/>
              </nav>
        </div>
      </section>
      </>
    </div>
  )
}

export default Home