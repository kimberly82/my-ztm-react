import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthWithEmailAndPassword, logGoogleUser} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            console.log(user);
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/wrong-password') {
                alert('Wrong password');
            } else {
                console.log("Error occured upon login attempt: ", error);
            }
            
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    return (
        <div>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='text'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <Button type='submit'>Sign In</Button>
                <Button buttonType='google' onClick={logGoogleUser}>Login with Google</Button>
            </form>
        </div>

    );
}

export default SignInForm;