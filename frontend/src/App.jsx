import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>

  );
};

export default App;
