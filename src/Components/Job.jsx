import React from 'react'

function Job(props) {
  return (
    <div style={{margin:'50px'}}>
        <h1>Dream Job:</h1>
        <h2>{props.name}</h2>
        <img style={{width:"100%", height:'auto', borderRadius:'50px'}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--a67XH0QN--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png" alt="It developer" />
    </div>
  )
}

export default Job