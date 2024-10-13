import React, { useContext } from 'react';
import { AuthContext } from '../contects/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Clear localStorage
                localStorage.clear();
                alert('Logout successfully!');
                
                // Redirect the user to the previous page or home page
                const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // Handle the error if something goes wrong
                console.error('Error during logout:', error);
            });
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;
