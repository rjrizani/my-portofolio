import React from 'react'
import Media from 'reactstrap/lib/Media'

export default function MediaMenu({title, description, icon, color, link}) {
    return (
        <Media
        className="d-flex align-items-center"
        href={link}
        target="_blank"
      >
        <div className={`icon icon-shape bg-gradient-${color} rounded-circle text-white`}>
          <i className={`ni ni-${icon}`} />
        </div>
        <Media body className="ml-3">
          <h6 className={`heading text-${color} mb-md-1`}>
            {title}
          </h6>
          <p className="description d-none d-md-inline-block mb-0">
          {description}
          </p>
        </Media>
      </Media>
    )
}
