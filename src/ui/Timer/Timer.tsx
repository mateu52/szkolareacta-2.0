import { useState } from "react";

export const Timer = () => {
    const [ num, setNum ] = useState(0)
    function time(){
        setNum(num+1)
    }
    
    setTimeout(time, 1000);
      return (
        <div>
            <p>{num}</p>
        </div>
      );
    }
//set interval co 1 sekunda +1