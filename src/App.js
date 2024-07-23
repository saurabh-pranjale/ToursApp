import { useState } from 'react';
import './App.css';
import Travels from './components/Travels';
import data from './data';
function App() {

const [state,setState] = useState(data)

function Remove(id){
const deleted = state.filter((it)=> it.id  !== id)
setState(deleted)
}

  return (

<>
{state.length == 0 ? <div className='bg-warning border border-2 border-dark text-center py-5'> <p>No Service is available</p> <p onClick={()=>{setState(data)}} style={{cursor:'pointer'}}>Refresh</p> </div> : <Travels Remove={Remove} tours={state} /> }

</>
  );
}

export default App;
