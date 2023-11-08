import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Destination from './Component/Destination'
import Crew from './Component/Crew'
import Technology from './Component/Technology'
import { Route, Router, Routes } from 'react-router-dom'
import './space.css'

const Space = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/destination"
                    element={<Destination />}
                />
                <Route
                    path="/crew"
                    element={<Crew />}
                />
                <Route
                    path="/technology"
                    element={<Technology />}
                />
            </Routes>
        </>
    )
}

export default Space