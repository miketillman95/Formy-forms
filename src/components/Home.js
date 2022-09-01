import { Link } from "react-router-dom";
import React from 'react'



const Home = () => {
  // adds chorelog

    
  return (
    <div>
         <>
      <h1> All me types of forms mate</h1>
      <section>
        <div className='list-container'>
          <div className='chore-header'>
                </div>

              <nav>
                <Link to='/chores'>Chore List</Link>
                <br/>

                <br/>
              </nav>
        </div>
      </section>
      </>
    </div>
  )
}

export default Home