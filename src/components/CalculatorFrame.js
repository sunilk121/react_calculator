import React,{useState} from 'react'
import {Display} from './Display'
import {Button} from './Button'
const buttons=
[
    {cls:"clean",label:"C"},
    {cls:"clear",label:"AC"},
    {cls:"divide",label:"/"},
    {cls:"multi",label:"*"},
    {cls:"plus",label:"+"},
    {cls:"minus",label:"-"},
    {cls:"ans",label:"="},
    {cls:"dot",label:"."},
    {cls:"no9",label:"9"},
    {cls:"no8",label:"8"},
    {cls:"no7",label:"7"},
    {cls:"no6",label:"6"},
    {cls:"no5",label:"5"},
    {cls:"no4",label:"4"},
    {cls:"no3",label:"3"},
    {cls:"no2",label:"2"},
    {cls:"no1",label:"1"},
    {cls:"no0",label:"0"},
    
]
const symbols=["+","-","*","/"];

export const CalculatorFrame = () => {
    const [textToDisplay, setTextToDisplay]=useState("");
    const [isanswered, setAnswered]=useState(false);
    const [lastsymbo, setlastsymbol]=useState("");
    const handleOnClick = (value)=> 
    {

        let str =textToDisplay+value;
        
        if(symbols.includes(value))
        {
            setlastsymbol(value);
        }
        if(value===("." ))
        {
            //handle before any symbowls 
    
            
            //handle after an symbol
            if (lastsymbo)
            {
                const lastsymboindex= textToDisplay.lastIndexOf(lastsymbo);
                const lastnumberset= textToDisplay.slice(lastsymboindex+1, textToDisplay.length);
            
            
                 if(lastnumberset.includes("."))
                 {
                      return;
                 }

            if(!lastsymbo && textToDisplay.includes("."))
            {
                return;
            }
         
        }
       
        }
     
        if (value=="=")
       
       
            {
             return onTotal();
            } 

            
     

        if (value=="AC")
            {
             return setTextToDisplay("");
            } 
        
        if (value=="C")
            {
                const str =textToDisplay.slice( 0,-1)
             return setTextToDisplay(str);
            } 

    
        
            if(symbols.includes(value))
            {
                const lastChar= textToDisplay.slice(-1);
                if(symbols.includes(lastChar))
                {
                     str=textToDisplay.slice(0,-1)+value;
                  
                }
            }

            if (textToDisplay.length<1 &&["*","/"].includes(value))
            {
                return;
            }

            
        if (isanswered && value!=="=")
        {
            
            setTextToDisplay(value);
            setAnswered(false);
            return;
        }
            
      

      
        setTextToDisplay(str)
    }
    const onTotal =()=> 
    {
    let str=textToDisplay;
    const lastChar=textToDisplay.slice(-1);
    if(symbols.includes(lastChar))
    {
        str= textToDisplay.slice(0,-1);
        setTextToDisplay(str);
    }

    const ttl = eval(str);
    setTextToDisplay(ttl.toString());
    setAnswered (true);
}


  return (
    <div className="mainParent">
        <Display textToDisplay={textToDisplay}/>
         <div className="items">
                {
                    buttons.map((item,i)=>{
                        return <Button key={i} item={item} handleOnClick={handleOnClick}/>
                    })
                }

                
                    
                    </div>
                </div>
    )
    }
