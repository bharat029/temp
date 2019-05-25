import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addCertificate, updateCertificate, deleteCertificate } from '../../../store/actions/cvActions'
import CertificateForm from '../Forms/CertificateForm'

class CertificateListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       certi: null
    }
  } 

  changeView = () => {
    this.setState({
      ListView: true
    })
  }

  add = e => {
    this.setState({
      ListView: false,
      certi: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      certi: this.props.certificates[e.target.id]
    })
  }

  render() {
    const {certificates, addCertificate, updateCertificate, deleteCertificate} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul className="list-unstyled">
            {
              certificates 
              ? certificates.map((certificate, idx) => <li key={idx} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ certificate['c-title'] }</span><button onClick={(e) => deleteCertificate(e.target.id)} id={certificate.id} className="btn btn-danger">Delete</button></li>) 
              : <p key="loadingcerti">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6">Add</button>
        </>
        : <CertificateForm certi={this.state.certi} changeView={this.changeView} add={addCertificate}  update={updateCertificate}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
    return {
      certificates: state.firestore.ordered.certificate
    }
  }
  
  const mapDispatchToProp = dispatch => {
    return {
      addCertificate: (certi) => dispatch(addCertificate(certi)),
      updateCertificate: (certi, idx) => dispatch(updateCertificate(certi, idx)),
      deleteCertificate: (idx) => dispatch(deleteCertificate(idx))
    }
  }
  
  export default compose(
    connect(mapStateToProp, mapDispatchToProp),
    firestoreConnect([
      { collection: 'certificate', orderBy: ['createdOn', 'desc'] }
    ])
  )(CertificateListView)
  