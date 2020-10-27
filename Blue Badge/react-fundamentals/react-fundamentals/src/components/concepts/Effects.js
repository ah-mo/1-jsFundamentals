import React, {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some imporant points regarding effects:</h2>
                <ul>
                    <li>They are triggered with state and prop updates, as well as after intitial render to the DOM.</li>
                    <li>Effects are used to trigger certain actions based upon changes to the component.</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside APIs, and other functions which may use system resources.</li>
                </ul>
                <SampleEffect />
                <br/>
                <SampleEffect />
            </div>
        </div>
    )
}

export default Effects;


const SampleEffect = () => {
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(timerRunning){
            timer = window.setTimeout(() => {
                console.log('the timer expired', Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        }
        //console.log('We initiated a state change.')
        return () => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000)}
        
    });

    useEffect(() => {
        console.log('DAMN, PLAYA, YOU DONE CHANGED THE STATE!');
    });

    // useEffect(() => {
    //     let timer2;
    //     if(timerRunning){
    //         timer2 = window.setTimeout(() => {
    //             console.log('HEY THERE, IT HAS BEEN 10 SECONDS!', Date.now()/10000);
    //             setTimerRunning(false);
    //         }, 10000)
    //     }
    //     return () => {window.clearTimeout(timer2); console.log('timer 2 was cleared', Date.now()/10000)}
    // })

    let buttonHandler = () => {
        if (!timerRunning){
            setTimerRunning(true);
        }
    }

    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demoes an effect.</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console.</button>
        </div>
    )
}
