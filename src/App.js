import './App.css';
import PwsInidcator from './PwsInidcator';
import { useState } from 'react';
import Materialui from './components/materialui';


const App = () => {

  const [pwd, setpwd]=useState('');

  const [type, setType]= useState('input');

  const showHide=(e)=>{
   e.preventDefault();
   e.stopPropagation()
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType)
  }

   return (
    <>
    
     <div className='contaniner'>
 <div className='col-md-6 mx-auto text-right'>
     <h3 className='text-center my-5 ' >Password strength</h3>
     <div className='form-group mb-1'>
      <form>
         <input type={type} className='form-control shadow-none' 
         placeholder='password' onChange={e => setpwd(e.target.value)}></input>
         <span className='show-password' onClick={showHide} >{type === 'input' 
         ? 'show' : 'hide' }</span>
      </form>
         
     </div>
 </div>  

      <PwsInidcator pwd={pwd}/>
     
    </div>
    <Materialui />
    </>
  );
}

export default App;
