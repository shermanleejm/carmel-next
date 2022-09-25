import { Button } from '@mui/material';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Admin = () => {
  return (
    <div>
      <Button
        onClick={() =>
          signIn('google', {
            callbackUrl: '/admin/dashboard',
          })
        }
      >
        login
      </Button>
    </div>
  );
};

export default Admin;
