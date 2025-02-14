import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url(https://kf.kobotoolbox.org/static/compiled/signup_photo.jpg)' }}>
                <div className="bg-gray-800 opacity-85 p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <div className="text-center mb-6">
                        <img src="#" alt="Relearn Logo" className="h-10 mx-auto" />
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-white">Username</label>
                            <input type="text" className="w-full p-2 border bg-white border-gray-600 rounded" required />
                        </div>

                        <div>
                            <label className="block text-white">Password</label>
                            <input type="password" className="w-full p-2 border bg-white border-gray-600 rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600">Login</button>
                    </form>

                    <div className="mt-4 flex justify-around text-center text-white">
                        <Link to="/" className="text-blue-400"> Create an account</Link>
                        <Link href="#" className="text-blue-400"> Forgot password?</Link>
                    </div>

                    <hr className='border-white mt-2' />

                    <div className="mt-4 text-center text-white space-x-2">
                        <Link to="/terms" className="text-blue-400"> Terms of Service</Link>
                        <Link to="/privacy" className="text-blue-400"> Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;

