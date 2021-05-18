import { createContext, useContext, useState } from 'react';
import Loading from './../components/Loading';

const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    function showLoading(message) {
        setMessage(message);
        setLoading(true);
    }

    function hideLoading() {
        setLoading(false);;
    }

    return (
        <LoadingContext.Provider value={{ loading, message, showLoading, hideLoading }}>
            <LoadingContext.Consumer>
            {
                ({ loading, message }) => (
                    <Loading {...{ loading, message }} />
                )
            }
            </LoadingContext.Consumer>
            {children}
        </LoadingContext.Provider>
    )
}

// custom hook
export const useLoading = () => useContext(LoadingContext);
