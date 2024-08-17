import React from 'react'

export default function FunctionalProps(props) {
    const { fName, age, department, hello } = props
    return (
        <>
            <h1>fname:{fName}</h1>
            <h2>age:{age}</h2>
            <h2>department:{department}</h2>
            <h2>hello:{hello}</h2>

            {props.children}
        </>


    )
}
