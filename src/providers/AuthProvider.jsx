import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut();
    }

    const updateUsersProfile = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
    }

    const authInfo = {
        createUser,
        logOut,
        updateUsersProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;