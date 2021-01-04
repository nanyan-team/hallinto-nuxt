import configs from '@/config'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

!firebase.apps.length && firebase.initializeApp(configs.firebaseConfig)
firebase.analytics()

export const _firebase = firebase
export const fireAuth = firebase.auth()
export const fireDB = firebase.firestore()
