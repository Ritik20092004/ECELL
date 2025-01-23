import './GridPage.css'
import React from 'react'
import { useState } from 'react';

function GridPage() {
    const [count, setCount] = useState([])
    const [isChanging, setIsChanging] = useState(false);
    const changecolor=(e)=>{
        e.target.style.backgroundColor = 'red';
        setCount([...count,e.target]);
    }
    const changeAll=(e)=>{
        if (isChanging || count.length === 0) return;
        setIsChanging(true);
        let index=count.length-1;
        const interval=setInterval(()=>{
            if(index>=0){
                count[index].style.backgroundColor='#00407a';
                index--;
            }
            else{
                setIsChanging(false);
                clearInterval(interval);
            }
        },500);
    }
  return (
    <div class="container" >
      
        <div class="gradient">
           
        </div>

        <div class="logo">
          <img src='./ecell.jpg' alt='E-cell' class="image" />
        </div>
        
        <div class="gridlayout">
        <div class="ingrid">
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changecolor}></div>
         <div class="square" onClick={changeAll}></div>
       </div>
       </div>

      </div>
  )
}

export default GridPage;
