import React ,{useState , useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import data from './Dataa/data.json';

const App = () =>{

  const [jobs, setJob] = useState([]);

  useEffect(()=>setJob(data),[]);

  console.log(jobs);
  return(
    <>
    <header className="bg-blue-700 mb-12" >
      <img src='/images/bg-header-desktop.svg' alt="header" style={{width:'100%'}} />
    </header>
      {
        jobs.map((job) =>(
          <Card job={job} key={job.id} />
        ))

      }
    </>
  );
}

export default App;
