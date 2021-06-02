import React, { useEffect } from 'react';
import './Account.scss';
import { useAuthContext } from "../../context/auth-context";
import { firebase, googleAuthProvider } from '../../firebase/firebase';
import Cart from '../cart/Cart';

const Account = () => {

    const { user } = useAuthContext();
    useEffect(() => {
        user && console.log(`Hello, ${user.displayName}!`);

    }, [user]);

    console.log(user)

    const googleLogo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

    const startLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
            console.log('Sign in successful!');
        }).catch((error) => {
            console.error(`An error happened : ${error}`);
        })
    }
    const startLogout = () => {
        firebase.auth().signOut().then(() => {
            console.log('Sign out successful!');
        }).catch((error) => {
            console.error(`An error happened : ${error}`);
        })
    }

    return (
        <>

            { user === null ?
                <>
                    <div className="accountWrap">
                        <div className="loginWrap">
                            <h3>You havn't login yet,<br/>Please login by</h3>
                            <div className="googleIcon"><img src={googleLogo} /></div>
                            <button><div onClick={startLogin} className="auth-button">Log in</div></button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="accountWrap">
                        <div className="accountImg"><img src={user.providerData[0].photoURL} /></div>
                        <div className="detailWrap">
                            <ul>
                                <li><h3>Account Detail</h3></li>
                                <li><span>Name:</span> <span>{user.providerData[0].displayName}</span></li>
                                <li><span>Email:</span> <span>{user.providerData[0].email}</span></li>
                                <button><div onClick={startLogout} className="auth-button">Logout</div></button>
                            </ul>
                        </div>

                    </div >
                    {/* ================Add cart section below?
                    <Cart /> */}
                </>
            }
        </>
    )
}

export default Account