import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import {AuthticationContainer} from './authentication.styles';
const Authentication = () => {

    return (
        <AuthticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthticationContainer>
    );
}

export default Authentication;