import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const CV = ({ education, certificate, software, interest, fname, lname, resume }) => {
  return (
    <>
      <Helmet>
        {
          fname && lname ? <title>CV - {fname + " " + lname} </title> 
          : <title>CV - </title>
        }
      </Helmet>
      <div className="page">
        <h2 id="page-title">CV</h2>
        <div id="page-content">
          <div id='cv'>
            <dl>
              <dt className="mb-2"><i className='fa fa-graduation-cap' /> Education</dt>
              <dd>
                <dl>
                {
                    education ?
                    education.map((edu, idx) =>
                    <div key={edu.id}>
                      <dt>{ edu['e-title'] }</dt>
                      <dd className="pl-5">
                        <ul>
                        { edu['e-desc-1'] && <li>{ edu['e-desc-1'] }</li>}
                        { edu['e-desc-2'] && <li>{ edu['e-desc-2'] }</li>}
                        { edu['e-desc-3'] && <li>{ edu['e-desc-3'] }</li>}
                        { edu['e-desc-4'] && <li>{ edu['e-desc-4'] }</li>}
                        { edu['e-desc-5'] && <li>{ edu['e-desc-5'] }</li>}
                        </ul>
                      </dd>
                    </div>
                    )
                    : <p>Loading Data... Please wait!!</p>
                  }
                </dl>
              </dd>
              <dt className="mb-2"><i className='fa fa-drivers-license-o	' /> Certificates</dt>
              <dd>
                <dl>
                {
                    certificate ?
                    certificate.map((certi, idx) =>
                    <div key={certi.id}>
                      <dt>{ certi['c-title'] }</dt>
                      <dd className="pl-5">{ certi['c-desc'] }</dd>
                    </div>
                    )
                    : <p>Loading Data... Please wait!!</p>
                  }
                </dl>
              </dd>
              <dt className="mb-2"><i className='fa fa-gamepad' /> Software Games</dt>
              <dd>
                <ul>
                {
                    software ?
                    software.map((sft, idx) =>
                      <li key={sft.id} className="mt-0">{ sft.sft }</li>
                    )
                    : <p>Loading Data... Please wait!!</p>
                  }
                </ul>
              </dd>
              <dt className="mb-2"><i className='fa fa-street-view' /> Interests</dt>
              <dd>
                <dl>
                {
                    interest ?
                    interest.map((inte, idx) =>
                    <div key={inte.id}>
                      <dt>{ inte['i-title'] }</dt>
                      <dd className="pl-5">{ inte['i-desc'] }</dd>
                    </div>
                    )
                    : <p>Loading Data... Please wait!!</p>
                  }
                </dl>
              </dd>
            </dl>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div id='download-btn-container'>
            <a href={resume ? resume : '#'} rel="noopener noreferrer" className='btn btn-primary' target='_blank'>
              <i className='fa fa-download'></i> Download CV
            </a>
          </div>
        </div>
        <br></br><br></br>
      </div>
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    fname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].fname : null,
    lname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].lname : null,
    resume: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].resume : null,
    education: state.firestore.ordered.education,
    certificate: state.firestore.ordered.certificate,
    software: state.firestore.ordered.software,
    interest: state.firestore.ordered.interest,
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'education', orderby: ['createdOn', 'desc'] },
    { collection: 'certificate', orderby: ['createdOn', 'desc'] },
    { collection: 'software', orderby: ['createdOn', 'desc'] },
    { collection: 'interest', orderby: ['createdOn', 'desc'] },
    { collection: 'personal_details' }
  ])
)(CV)
