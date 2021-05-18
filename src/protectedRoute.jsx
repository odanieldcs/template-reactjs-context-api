import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/userContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated() ? <Component {...props} /> : 
                (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default ProtectedRoute;