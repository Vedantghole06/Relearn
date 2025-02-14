import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(https://kf.kobotoolbox.org/static/compiled/signup_photo.jpg)' }} aria-label="Signup page background">

        <div className="bg-gray-800 m-5 opacity-85 p-8 rounded-lg shadow-lg w-full max-w-md">

          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create an account</h2>
          <form className="space-y-4">

            <div>
              <label className="block text-white">Full name</label>
              <input type="text" name="fullName" className="w-full p-2 border border-gray-600 bg-white rounded" required />
            </div>

            <div>
              <label className="block text-white">Username</label>
              <input type="text" name="username" className="w-full p-2 border border-gray-600 bg-white rounded" required />
            </div>

            <div>
              <label className="block text-white">Email</label>
              <input type="email" name="email" className="w-full p-2 border border-gray-600 bg-white rounded" required />
            </div>

            <div className="flex space-x-4">

              <div className="w-1/2">
                <label className="block text-white">Country</label>
                <select name="country" className="w-full p-2 border border-gray-600 bg-white rounded" required>
                  <option value="">Select Country</option>
                  {/* Add country options here */}
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-white">Sector</label>
                <select name="sector" className="w-full p-2 border border-gray-600 bg-white rounded" required>
                  <option value="">Select Sector</option>
                  {/* Add sector options here */}
                </select>
              </div>

            </div>


            <div>
              <label className="block text-white">Organization type</label>
              <select name="organizationType" className="w-full p-2 border border-gray-600 bg-white rounded" required>
                <option value="">Select Organization Type</option>
                {/* Add organization type options here */}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" name="updates" className="h-4 w-4 text-blue-600" />
              <label className="text-white">I want to receive occasional updates about KoboToolbox</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" name="terms" className="h-4 w-4 text-blue-600" />
              <label className="text-white">I agree with the
                <Link to="/terms" className="text-blue-400"> Terms of Service</Link> and
                <Link to="/privacy" className="text-blue-400"> Privacy Policy</Link></label>
            </div>

            <div>
              <label className="block text-white">Password</label>
              <input type="password" name="password" className="w-full p-2 bg-white border border-gray-600 rounded" required />
            </div>

            <div>
              <label className="block text-white">Password confirmation</label>
              <input type="password" name="confirmPassword" className="w-full p-2 bg-white border border-gray-600 rounded" required />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Create Account</button>

          </form>

          <div className="mt-4 text-center text-white">
            <span>or </span>
            <Link to="/login" className="text-blue-400">login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
