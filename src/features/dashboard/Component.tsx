import AdminDashboard from './pages/AdminDashboard';
import TADashboard from './pages/TADashboard';
import TALeadDashboard from './pages/TALeadDashboard';

export default function Dashboard() {
  const role: 'admin' | 'ta' | 'taLead' = 'ta';

  if (role === 'admin') return <AdminDashboard />;
  if (role === 'ta') return <TADashboard />;
  if (role === 'taLead') return <TALeadDashboard />;

  return <div>Unauthorized</div>;
}
