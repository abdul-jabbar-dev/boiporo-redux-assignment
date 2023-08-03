import React, { ReactNode } from 'react';
import { useGetUserQuery } from '../../redux/fetures/booksAPI/book';
import { useNavigate } from 'react-router-dom';

const PrivetRoute: React.FC<{ children :ReactNode}> = ({ children }) => {
    const navigate = useNavigate();
    const { data: user } = useGetUserQuery({ token: localStorage.getItem('token') });

    if (user) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        navigate('/login');
        return null; // You can also return some fallback UI here if you prefer
    }
};

export default PrivetRoute;