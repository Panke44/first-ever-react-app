import React from 'react'
import style from './DoubleText.module.css'
import './test.css'

const DoubleText = (props) => {
    return (
            <div className="container-fluid double">
                <div className="row">
                    <div className="col-6">
                        <h4> {props.header1} </h4>
                        <p> {props.paragraph1} </p>
                    </div>
                    <div className="col-6">
                        <h4> {props.header1} </h4>
                        <p> {props.paragraph1} </p>
                    </div>

                </div>
            </div>
    )
}

export default DoubleText