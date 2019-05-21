import cv from '../../pages/cv.json'

const initState = { 
    education: cv['Education'],
    certificates: cv['Certificates'],
    software: cv['Softwares Games'],
    interests: cv['Interests'],
    
 }

const cvReducer = (state = initState, action) => {
    let { education, certificates, software, interests } = state
    let index

    switch (action.type) {
        case 'ADD_EDUCATION':
            if(action.edu.length === 0){
                return state
            }
            return {
                ...state,
                education: [ ...education, action.edu] 
            }
        case 'UPDATE_EDUCATION':
            index = parseInt(action.idx, 10)
            education[index] = action.edu
            return {
                ...state,
                education
            }
        case 'DELETE_EDUCATION':
            index = parseInt(action.idx, 10)
            return {
                ...state,
                education: education.filter((edu, idx) => idx !== index)
            }
        case 'ADD_CERTIFICATE':
            if(action.certi.length === 0){
                return state
            }
            return {
                ...state,
                certificates: [ ...certificates, action.certi] 
            }
        case 'UPDATE_CERTIFICATE':
            index = parseInt(action.idx, 10)
            certificates[index] = action.certi
            return {
                ...state,
                certificates
            }
        case 'DELETE_CERTIFICATE':
            index = parseInt(action.idx, 10)
            return {
                ...state,
                certificates: certificates.filter((certi, idx) => idx !== index)
            }
        case 'ADD_SOFTWARE':
            if(action.sft.length === 0){
                return state
            }
            return {
                ...state,
                software: [ ...software, action.sft] 
            }
        case 'UPDATE_SOFTWARE':
            index = parseInt(action.idx, 10)
            software[index] = action.sft
            return {
                ...state,
                software
            }
        case 'DELETE_SOFTWARE':
            index = parseInt(action.idx, 10)
            return {
                ...state,
                software: software.filter((sft, idx) => idx !== index)
            }
        case 'ADD_INTEREST':
            if(action.inte.length === 0){
                return state
            }
            return {
                ...state,
                interests: [ ...interests, action.inte] 
            }
        case 'UPDATE_INTEREST':
            index = parseInt(action.idx, 10)
            interests[index] = action.inte
            return {
                ...state,
                interests
            }
        case 'DELETE_INTEREST':
            index = parseInt(action.idx, 10)
            return {
                ...state,
                interests: interests.filter((inte, idx) => idx !== index)
            }
        default: return state
    }
}

export default cvReducer