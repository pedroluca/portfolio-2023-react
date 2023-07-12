import React from 'react'
import { Helmet } from 'react-helmet'

function DocumentTitle(props) {
  return (
    <Helmet>
      <title>{props.title} | Pedro</title>
    </Helmet>
  )
}

export default DocumentTitle