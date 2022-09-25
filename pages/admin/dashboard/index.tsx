import { getSession, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      console.log(session);
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
    <div></div>
  ) : (
    <div>
      <h1>BIG WORDS</h1>
      <button onClick={() => signOut({ callbackUrl: '/' })}>signout</button>
    </div>
  );
}
