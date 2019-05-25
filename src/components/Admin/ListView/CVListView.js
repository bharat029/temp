import React from 'react'
import {Link} from 'react-router-dom';

const CVListView = () => {
  return (
    <div id="cv-link">
      <Link to="/admin/cv/education" className="mt-3 pl-5 border row">Education</Link>
      <Link to="/admin/cv/certificate" className="mt-3 pl-5 border row">Certificate</Link>
      <Link to="/admin/cv/software" className="mt-3 pl-5 border row">Software/Games</Link>
      <Link to="/admin/cv/interest" className="mt-3 pl-5 border row">Insterest</Link>
    </div>
  )
}

export default CVListView
