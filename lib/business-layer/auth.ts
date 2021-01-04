import { _firebase, fireAuth } from '../firebase'

/**
 * Google Auth Provider
 */
const googleAuthProvider = new _firebase.auth.GoogleAuthProvider()

/**
 * Create new user and Sign In
 * @param email - email address to create new user account
 * @param password - password for the new user account
 *
 * @return create and sign in promise
 */
export function createUserWithEmailAndPassword(
  email: string,
  password: string
) {
  return fireAuth.createUserWithEmailAndPassword(email, password)
}

/**
 * Sign In Existing User
 * @param email - email address for existing user
 * @param password - password for existing user
 *
 * @return sign in promise
 */
export function signInWithEmailAndPassword(email: string, password: string) {
  return fireAuth.signInWithEmailAndPassword(email, password)
}

/**
 * Auth state observer function
 * @param cb - callback function to run on auth state change
 */
export function onAuthStateChanged(cb: Function) {
  fireAuth.onAuthStateChanged((user) => cb(user))
}
/**
 * Sign In with Google using Redirect Function
 * @return redirect result promise
 */
export function googleSignInWithRedirect() {
  return fireAuth
    .signInWithRedirect(googleAuthProvider)
    .then(() => fireAuth.getRedirectResult())
}

/**
 * Get current signed in user
 * @return current user object | null
 */
export function getCurrentUser() {
  return fireAuth.currentUser
}

/**
 * Update current signed in user password
 * @param newPassword - new password to change
 *
 * @return update password promise
 */
export function setNewPassword(newPassword: string) {
  const user = fireAuth.currentUser
  return user?.updatePassword(newPassword)
}

/**
 * Delete current signed in user account
 * @return delete promise
 */
export function deleteCurrentUser() {
  const user = fireAuth.currentUser
  return user?.delete()
}

/**
 * Sign out from the current user
 * @return sign out promise
 */
export function signOut() {
  return fireAuth.signOut()
}
