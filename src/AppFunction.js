import React, { useState, useEffect} from 'react';

const App = () => {

    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: null, y: null})


    useEffect(() => {
        document.title = `${count}`
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [count])

    const handleMouseMove = event => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY
        })
    }

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

            <h2>Mouse Position</h2>
            <p>Y position: {JSON.stringify(mousePosition, null, 2)}</p>

            {/* <img  style={{height: "50px", width: "50px"}}
                onClick={toggleLike} src={isOn ? "https://icon.now/highlight/fd0" : "https://icon.now/highlight/aaa"}
                alt="Flashlight"
            >
            </img> */}
        </React.Fragment>
    )
}

export default App