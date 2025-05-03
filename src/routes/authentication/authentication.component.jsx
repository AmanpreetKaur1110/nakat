import { useLocation, useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import'./authentication.style.scss';

const Authentication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location.state?.from || '/';
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}


export default Authentication;