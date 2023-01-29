import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
export default function App() {

    const locationsArray = data.map(loc => {
        return <Card loc={loc} />
    })
    
    return (
        <div>
            <Navbar />
            { locationsArray }
        </div>
    )
}