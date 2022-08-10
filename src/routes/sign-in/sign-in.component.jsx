import {
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.utils';

 import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
 import SignInForm from '../../components/sign-in-form/sign-in-form.component';



const SignIn = () => {

    
    
    return (
        <div>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default SignIn;