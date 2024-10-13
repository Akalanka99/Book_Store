import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate ,Navigate} from 'react-router-dom'
import { AuthContext } from '../contects/Authprovider'
import googleLogo from '../assets/google-logo.svg'
import { useGetUserInfo } from '../hooks/useGetUserInfo'



const Login = () => {
    const {login,loginwithGoogle} = useContext(AuthContext);
    const [error,serError] =useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // Assuming you want to use the login function for email/password authentication
        login(email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                const authInfo = {
                    userID: user.uid,
                    name: user.displayName || user.email, // If displayName is null, use email
                    isAuth: true,
                    provider: 'password'
                };

                localStorage.setItem('auth', JSON.stringify(authInfo));
                alert('Login successfully!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                serError(errorMessage);  // Set the error message to state for display
            });
        
    }
    // singin with google
    const handleGoogle = () => {
      loginwithGoogle().then((result) => {
        const authInfo={
          userID:result.user.uid,
          name:result.user.displayName,
          isAuth:true,
          provider:'google.com'
        }
        localStorage.setItem('auth',JSON.stringify(authInfo));
        alert('login successfully!')
        navigate('/admin/dashboard');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        serError(errorMessage)
    });
    }
    const { isAuth } = useGetUserInfo();
    if (isAuth) {
      return <Navigate  to="/admin/dashboard" />;
    }
    
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Log in Form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
                      
                        {error ? <p className='text-red-600 text-base'>Email or password is incorrect:</p> : ""}
                      
                        <p>
                           If you haven't an account. please <Link to="/signup" className='text-blue-700 underline'>Signup </Link> Here 
                        </p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-6 py-2">logicc</button>
						</div>
					</form>
				</div>

        <hr/>
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
          <button onClick={handleGoogle} className='block'><img src={googleLogo} alt="" className='w-12 h-12 inline-block' />Login with Google</button>
        </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login
