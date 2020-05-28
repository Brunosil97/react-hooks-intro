import React, { useState, useEffect} from 'react';

const App = () => {

    const [count, setCount] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const [status, setStatus] = useState(navigator.onLine)

    useEffect(() => {
        document.title = `${count}`
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)


        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [count])

    const handleOnline = () => {
        setStatus(true)
    }

    const handleOffline = () => {
        setStatus(false)
    }

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
            <p>Y position: {JSON.stringify(mousePosition.y)}</p>
            <p>X position: {JSON.stringify(mousePosition.x)}</p>

            <h2>Network Status</h2>
            <p>You are <strong>{status ? "online" : "offline"}</strong></p>

        </React.Fragment>
    )
}

export default App