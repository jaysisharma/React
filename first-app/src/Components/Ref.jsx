import React, { useRef } from 'react';

const Ref = () => {
    const buttonRef = useRef(null);
    const buttonRef2 =  useRef(null);

    const changeColor = () => {
        buttonRef.current.style.backgroundColor = 'blue';
    };
    const back = () =>{
        buttonRef2.current.style.backgroundColor ='red';
        buttonRef2.current.style.color ='white';

    }

    return (
        <div>
            <button ref={buttonRef} onClick={changeColor}>Submit</button>
            <button ref={buttonRef2} onClick={back}>Submit</button>
        </div>
    );
}

export default Ref;
