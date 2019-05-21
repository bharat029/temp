export const addEducation = (edu) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').add({ ...edu }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteEducation = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').doc(id).delete()
  }
}

export const updateEducation = (edu, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('education').doc(id).update({ ...edu })
  }
}

export const addCertificate = (certi) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('certificate').add({ ...certi }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteCertificate = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('certificate').doc(id).delete()
  }
}

export const updateCertificate = (certi, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('certificate').doc(id).update({ ...certi })
  }
}

export const addSoftware = (sft) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('software').add({ ...sft }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteSoftware = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('software').doc(id).delete()
  }
}

export const updateSoftware = (sft, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('software').doc(id).update({ ...sft })
  }
}

export const addInterest = (inte) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('interest').add({ ...inte }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteInterest = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('interest').doc(id).delete()
  }
}

export const updateInterest = (inte, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('interest').doc(id).update({ ...inte })
  }
}
