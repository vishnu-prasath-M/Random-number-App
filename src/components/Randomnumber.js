import { useState } from "react"

function Randomnumber() {
    var [random, setrandom] = useState(0)

    function randomnumber() {
        setrandom(Math.floor(Math.random() * 100) + 1)
    }
    function reset() {
        setrandom(0)
    }
    return (
        <>
            <div className="randomNumber">
                <div className="container">
                    <h1>RANDOM NUMBER GENARATER</h1>
                    <h2>{random}</h2>
                    <br />
                    <div className="button">
                        <button className="button-1" onClick={randomnumber}>Genarate Random Number</button>
                        <br />
                        <button className="button-2" onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Randomnumber