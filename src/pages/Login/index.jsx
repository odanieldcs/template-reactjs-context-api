import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../../contexts/userContext';
import { Link } from 'react-router-dom';

const Page = () => {
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('');
    const history = useHistory()
    const { login } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()
       
        const result = await login(userName, password);

        if (result.authenticated) {
            history.push('/user')
        } else {
            setError(result.message);
        }
    }

    return (
        <div>
            <Link to="/">Go Back another examples</Link>
            <p>Authentication Page.</p>
            <p><Link to="/user">Try access protected page</Link></p>
            <input type="email" onChange={e => { setUserName(e.target.value)}} placeholder="Your user name" />
            <input type="password" onChange={e => { setPassword(e.target.value)}} placeholder="Your password" />
            <input type="button" onClick={handleSubmit} value="Login" />
            {error && <p>{error}</p>}
        </div>
    )
}

export default Page;