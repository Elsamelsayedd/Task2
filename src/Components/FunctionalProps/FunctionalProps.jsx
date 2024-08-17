import React from 'react'

export default function FunctionalProps({ fName, age, department, hello }) {
    return (
        <>
            <h1>fname:{fName}</h1>
            <h2>age:{age}</h2>
            <h2>department:{department}</h2>
            <h2>hello:{hello}</h2>
        </>


    )
}
