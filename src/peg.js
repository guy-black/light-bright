import React,{useState} from 'react';

function Peg(props){
  const colors = ["black", "white", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const [colorNum, setColorNum] = useState(0);
  function handleClick (){
    console.log("ayyyee lit fam");
    if(colorNum === colors.length - 1){
      setColorNum(0);
    }else{
      setColorNum(colorNum+1);
    }
  }

  return(
  <svg height={props.size} width={props.size}>
    <circle cx={props.size * .5} cy={props.size * .5} r={props.size * .4} onClick={()=>handleClick()} fill={colors[colorNum]} />
  </svg>
  );
}

export default Peg;
