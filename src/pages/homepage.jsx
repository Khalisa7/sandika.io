import React, { Fragment, useState } from 'react'
import OwlSlider from '@src/component/owl-carousel'


const Homepage = () => {
    var temp = {}

    const [state, setState] = useState({})

    function handleSubmit(e){
        e.preventDefault()
        setState(temp)
        console.log(state)
    }

    function handleValue(e, key){
        temp[key] = e.target.value
        console.log(temp)
    }

    return(
        <Fragment>
            <div style={{}} className="page page-home">
                <div className="main-slider">
                    <div className="container banner-wrapper">
                        <OwlSlider/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Homepage 