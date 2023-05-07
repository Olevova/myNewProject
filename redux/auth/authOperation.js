import { app } from '../../firebase/config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { authSlice } from './authReducer';
// import { authSignInState } from './authReducer';
// const { authSignInState } = authSlice.actions;

const auth = getAuth(app);


const authSignIn = ({email, password}) => async (dispatch, getState) => {
   try {
    const user = await signInWithEmailAndPassword(auth, email, password);
   } catch (error) {
     console.log(error.message);
   }
    
};

const authSignOutUser =() => async (dispatch, getState) => {
    try {     
        await signOut(auth);
        dispatch(authSlice.actions.authSignOut())
    } catch (error) {
        console.log(error.message);
    }

};

const authSignUser=({login, email, password}) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser;
        console.log('its', user, user.displayName);
       
        if (user) {
            console.log('Hi');
            await updateProfile(user, { displayName: login });
            const {uid,displayName} = auth.currentUser;
            console.log("nammm", user.displayName);
            dispatch(authSlice.actions.updateUserProfile({
                userId: uid,
                login: displayName
            }));
        }
        else {
            console.log('have not user');
        }
    } catch (error) {
        console.log('err');
        console.log(error.message);
    }
};

const authStateChangedUser = () => async(dispatch, getState) => {
    await auth.onAuthStateChanged((user) => {
        if (user) {
            const youUser = {
                userId: user.uid,
                login: user.displayName
            }
            console.log("youUser", youUser);
            dispatch(authSlice.actions.updateUserProfile(youUser));
            dispatch(authSlice.actions.authStateChange({stateChange:true}))
    }
  })
}

export { authSignIn, authSignOutUser, authSignUser, authStateChangedUser };