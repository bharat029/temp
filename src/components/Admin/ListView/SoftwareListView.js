import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addSoftware, updateSoftware, deleteSoftware } from '../../../store/actions/cvActions'
import SoftwareForm from '../Forms/SoftwareForm'

class SoftwareListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       sft: null
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
      sft: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      sft: this.props.software[e.target.id]
    })
  }

  render() {
    const {software, addSoftware, updateSoftware, deleteSoftware} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul className="list-unstyled">
            {
                software ? software.map((sft, idx) => <li key={sft.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ sft.sft }</span><button onClick={(e) => deleteSoftware(e.target.id)} id={sft.id} className="btn btn-danger">Delete</button></li>) 
                : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6">Add</button>
        </>
        : <SoftwareForm sft={this.state.sft} changeView={this.changeView} add={addSoftware}  update={updateSoftware}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
    return {
        software: state.firestore.ordered.software
    }
  }
  
  const mapDispatchToProp = dispatch => {
    return {
        addSoftware: (sft) => dispatch(addSoftware(sft)),
        updateSoftware: (sft, idx) => dispatch(updateSoftware(sft, idx)),
        deleteSoftware: (idx) => dispatch(deleteSoftware(idx)),
    }
  }
  
  export default compose(
    connect(mapStateToProp, mapDispatchToProp),
    firestoreConnect([
      { collection: 'aboutme', orderBy: ['createdOn'] }
    ])
  )(SoftwareListView)
  