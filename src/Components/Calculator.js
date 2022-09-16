
import React,{useState,useRef,useEffect} from 'react';
import './Calculator.css';

const Calculator=()=>{
    const[result,setResult]=useState('');
    const inputRef=useRef();
    useEffect(()=>{
         inputRef.current.focus();
    },[])
    const handleClick=(e)=>{
        setResult(result+e.target.name);
    }
    const backspace=()=>{
        setResult(result.slice(0,result.length-1));
    }
    const clearr=()=>{
        setResult('');
    }
    const handleResult=()=>{
        try{
            // setResult(eval(result));
            setResult(new Function('return '+result)())
        }
        catch(error)
        {
            setResult('Error')
        }
        
    }
    console.log(result)
    return(
        <>
        <div className='mid'>
            <div>
             <div id="para_div">
             <p>CALCULATOR</p>
             <p id="refl">CALCULATOR</p>
            </div>
        <div className='main'>
           
        <div className='ipt'><input type='text' className='ipti' value={result} ref={inputRef}/></div>
        

        
            <div className='clear'><button onClick={clearr} className='button-style'>C</button></div>
            <div className='delete'><button onClick={backspace} className='button-style'>del</button></div>
            <div className='modulo'><button name='%' onClick={handleClick} className='button-style'>%</button></div>
            <div className='plus'><button name='+' onClick={handleClick} className='button-style'>+</button></div>
            <div className='seven'><button name='7' onClick={handleClick} className='button-style'>7</button></div>
            <div className='eight'><button name='8' onClick={handleClick} className='button-style'>8</button></div>
            <div className='nine'><button name='9' onClick={handleClick} className='button-style'>9</button></div>
            <div className='minus'><button name='-' onClick={handleClick} className='button-style'>-</button></div>
            <div className='four'><button name='4' onClick={handleClick} className='button-style'>4</button></div>
            <div className='five'><button name='5' onClick={handleClick} className='button-style'>5</button></div>
            <div className='six'><button name='6' onClick={handleClick} className='button-style'>6</button></div>
            <div className='multiply'><button name='*' onClick={handleClick} className='button-style'>&times;</button></div>
            <div className='one'><button name='1' onClick={handleClick} className='button-style'>1</button></div>
            <div className='two'><button name='2' onClick={handleClick} className='button-style'>2</button></div>
            <div className='three'><button name='3' onClick={handleClick} className='button-style'>3</button></div>
            <div className='divide'><button name='/' onClick={handleClick} className='button-style'>/</button></div>
            <div className='zero'><button name='0' onClick={handleClick} className='button-style'>0</button></div>
            <div className='decimal'><button name='.' onClick={handleClick} className='button-style'>.</button></div>
            <div className='equal'><button onClick={handleResult} className='button-style'>=</button></div>
            

        </div>
        </div>
        </div>

        </>
    )
}
export default Calculator;