import React from 'react'
// import 'materialize-css/dist/css/materialize.min.css'

const Kid = ({
  name
}) => {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <div className="col s12">
              <a href="#" className="brand-logo">Example Component</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Taylor</a></li>
                <li><a href="#">Hunter</a></li>
                <li><a href="#">Jordan</a></li>
                <li><a href="#">Emma</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s12">
          <p>
            The message is:
          </p>
          <blockquote>
            {name}
          </blockquote>
        </div>
      </div>

    </div>
  )
}

export default Kid
