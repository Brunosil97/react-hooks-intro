import React, { useState, useEffect} from 'react';

const App = () => {

    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)


    useEffect(() => {
        document.title = `you have clicked ${count} times`
    })

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const toggleLike = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    return (
        <React.Fragment>
            <h2>Counter</h2>
            <button onClick={incrementCount}> I was clicked {count} times</button>
            <h2>Toggle Light</h2>
            <div style={{height: "50px", width: "50px", background: isOn ? "yellow" : "grey"}}
            onClick={toggleLike}>

            </div>
            {/* <img  style={{height: "50px", width: "50px"}}
                onClick={toggleLike} src={isOn ? "https://icon.now/highlight/fd0" : "https://icon.now/highlight/aaa"}
                alt="Flashlight"
            >
            </img> */}
        </React.Fragment>
    )
}

export default App