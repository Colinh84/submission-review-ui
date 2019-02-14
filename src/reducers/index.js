/**
 * Combines all reducers into one
 */
import { combineReducers } from 'redux'
import auth from './auth'
import challengeDetails from './challengeDetails'
import challenges from './challenges'
import submissionDetails from './submissionDetails'

export default combineReducers({ auth, challenges, challengeDetails, submissionDetails })
