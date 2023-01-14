import React from 'react';
import './App.css';

const Person=(props)=>{
  const{img,name,job}=props.person;
  const url= `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (<div className='person'>
        <img src={url} alt=""></img>
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </div>
    
     </div>)
}

const PersonList=()=>{

  const people= [
    {
      img:29,name:'tzanca',job:'camatar'
    },
    {
      img:38,name:'stefan ghe',job:'cantaret'
    },
    {
      img:7,name:'mihai stt',job:'tiktoker'
    }
  ];
  return (<section>
<Person person ={people[0]}/>
<Person person ={people[1]}/>

<Person person ={people[2]}/>



  </section>) ;
};
const App =()=>(<PersonList/>)



export default App;
