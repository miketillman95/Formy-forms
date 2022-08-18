import { Link } from "react-router-dom";


function App() {
  return (
   <div className='list-container'>
    <div className='chore-header'>
      <h1> All me types of forms mate</h1>
      </div>

    <nav>
      <Link to='/chores'>Chore List</Link>
      </nav>

  </div>
  );
}

export default App;
