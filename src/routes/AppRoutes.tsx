import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../features/dashboard/Component';
import Jobs from '../features/jobs/Component';
import Candidates from '../features/candidates/pages/Component';
import Assessment from '../features/assessment/Component';
import Analytics from '../features/analytics/Componenet';
import Communication from '../features/communication/Component';
import Roles from '../features/Roles/Component';
import Integration from '../features/Integration/Component';
import Setting from '../features/Setting/Component';
import NotFound from '../components/NotFound';
import { QuestionSettings } from '../features/QuestionSettings/QuestionSettings';
import QuickSetup from '../features/QuestionSettings/QuickSetup/QuickSetup';
 
const AppRoutes = () => (
  <Router>
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/'
          element={
            // <ProtectedRoute>
            <MainLayout />
            //   </ProtectedRoute>
          }
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='jobs' element={<Jobs />} />
           
          <Route path="jobs/:jdRefId">
              <Route index element={null} />
              <Route path='questions-settings'  element={<QuestionSettings />} />
              <Route path="quick-setup"     element={<QuickSetup />} />
              {/* <Route path="smart-assistant" element={<SmartAssistant />} />
              <Route path="expert-mode"     element={<ExpertMode />} /> */}
          </Route>
          <Route path='candidates' element={<Candidates />} />
          <Route path='assessment' element={<Assessment />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='communication' element={<Communication />} />
          <Route path='roles' element={<Roles />} />
          <Route path='integrations' element={<Integration />} />
          <Route path='setting' element={<Setting />} />
        </Route>
      </Route>
      {/* Private Routes */}

      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
