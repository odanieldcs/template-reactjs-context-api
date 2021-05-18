export const login = (username, password) => {
    let response = { authenticated: false };

    // request backend here
    // hardcode checking, that need check on backend
    if(username === 'daniel' && password === '123456') {
        response = { 
            token: 'jwtHere', 
            userData: {
                name: 'Daniel',
                last_name: 'Castro',
                github: 'danielcsrs'
            },
            authenticated: true 
        }
    } else {
        response = {...response, message: 'Username or Password invalid' }
    }
    
    return response
};

export const logout = () => {
    // request backend here to invalidate token/session
    return {};
};
