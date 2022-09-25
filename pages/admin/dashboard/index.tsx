import { Button, CircularProgress } from '@mui/material';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/pages/Dashboard.module.css';
import RichText from '../../../components/texteditor/RichText';

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    getSession().then((session) => {
      const email = session?.user?.email;
      if (!email) {
        router.push('/admin');
      }

      const allowedEmails = process.env.NEXT_PUBLIC_ALLOWED_USERS.split(',');
      if (!allowedEmails.includes(email)) {
        router.push('/');
      } else {
        setIsLoading(false);
      }
    });
  });

  return isLoading ? (
    <div className={styles.full_page_loader}>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <Button onClick={() => signOut({ callbackUrl: '/' })}>sign out</Button>

      <RichText />
    </div>
  );
}
