import { Link } from 'react-router-dom';
import { useAuth } from './../../contexts/userContext';

const Page = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Link to="/">Go Back another examples</Link>
            <p>User data from context with a custom hook.</p>
            <p>{user.last_name}, {user.name}</p>
            <p>{user.github}</p>
            <br/>
            <input type="button" value="Logout" onClick={logout} />
        </div>
    )
}

export default Page;