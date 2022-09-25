import { signIn } from 'next-auth/react';

const Admin = () => {
  signIn('google', { callbackUrl: '/admin/dashboard' });
};

export default Admin;
