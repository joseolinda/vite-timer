import { useEffect, useState } from 'react';

function TimerCount() {
    const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // Set time in seconds

    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
    const minutes = Math.floor(secondsAmount / 60)
    const seconds = Math.floor(secondsAmount) % 60
    const initalDateTime = new Date()

    const executeTimer = () => {
        if(secondsAmount <= 0) return

        setTimeout(() => {
            const timeNow = new Date()
            const pastTime = (timeNow.getTime() - initalDateTime.getTime()) / 1000
            setSecondsAmount(sec => {
                if(sec > 1)
                    return sec - pastTime  
                else
                    return 0
            })
        }, 200)
    }

    useEffect(executeTimer, [secondsAmount])

    return(
        <div>
            <hr />
            <span>{String(minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(seconds).padStart(2, '0')}</span>
            <hr />
        </div>
    )
}

export default TimerCount