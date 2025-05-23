import ProtectedLayout from '../components/ProtectedLayout';

export default function DashboardLayout({ children }) {
  return <ProtectedLayout redirectTo="/">{children}</ProtectedLayout>;
}
