import React, { Fragment} from 'react'

const ContainerCustom = (props) => {
    const {children} = props
    return(
        <Fragment>
            <div className="container-custom">
                {children}
            </div>
        </Fragment>
    )
}

export default ContainerCustom