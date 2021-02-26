
import React from 'react'
import Button from 'reactstrap/lib/Button'
import UncontrolledTooltip from 'reactstrap/lib/UncontrolledTooltip'

const SocialMediaButtons = ({icon, color, link, description}) => {
    return (
    <>
        <Button
            className="btn-icon-only rounded-circle ml-1"
            color={color}
            href={link}
            id={`button-${icon}`}
            target="_blank"
        >
            <span className="btn-inner--icon">
            <i className= {`fa fa-${icon}`} />
            </span>
        </Button>
        <UncontrolledTooltip delay={0} target={`button-${icon}`}>
            {description}
        </UncontrolledTooltip>
    </>
    )
}

export default SocialMediaButtons
