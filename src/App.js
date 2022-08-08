import {React, useState} from 'react';
import './App.css';

function Report(props){
  let righe = []
  props.report.map( (i, idx) => {
    let is_max = false
    if(i == Math.max(...props.report)){
      is_max = true
    }
    righe.push(<tr key={idx}>
      <td>{idx+1}</td>
      <td>{i}</td>
      {is_max && <td> :-- </td>}
    </tr>)
  })
  return (
    <table>
      <tbody>
        {righe}
      </tbody>
    </table>
  )
}
function App() {
  let [dado, setDado] = useState('')
  let [report, setReport] = useState([0,0,0,0,0,0])

  function lanciaDado(){
    let r = Math.floor(Math.random()*6 +1)
    setDado(r)
    setReport((report)=>{
      let r2 = [...report]
      r2[r-1]++
      return r2
    })
  }
  return (
    <div className="App">
      <div className='r1'>
        <div id='dado1'>{dado}</div>
      </div>
      <div className='r2'>
        <button onClick={ lanciaDado }>Lancia il dado</button>
        <button onClick={()=>{
          for(let i=0; i<100;i++){
            lanciaDado()
          }
        }}>x 100</button>
      </div>
      <div className='r3'>
        <div>
          <Report report={report} />
        </div>
      </div>
    </div>
  );
}

export default App;