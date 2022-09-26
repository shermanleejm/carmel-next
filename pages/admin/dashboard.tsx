import { CircularProgress } from '@mui/material';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/pages/Dashboard.module.css';
import CustomDrawer from 'components/admin/CustomDrawer';
import { AddCircle, Apps, DeleteOutline } from '@mui/icons-material';
import NewPost from 'components/texteditor/NewPost';
import AllArticles from 'components/admin/AllArticles';
import { Articles } from '@prisma/client';

export type DrawerComponentType = {
  title: string;
  component: JSX.Element;
  icon: JSX.Element;
};

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const [selectedComponent, setSelectedComponent] = useState(0);
  const [article, setArticle] = useState<Articles>({ content: '' } as Articles);

  const handleChangeComponent = (index: number, article?: Articles) => {
    setArticle(article);
    setSelectedComponent(index);
  };

  const components: DrawerComponentType[] = [
    {
      title: 'Add New Article',
      component: (
        <NewPost article={article} handleChangeComponent={handleChangeComponent} />
      ),
      icon: <AddCircle />,
    },
    {
      title: 'All Articles',
      component: <AllArticles handleChangeComponent={handleChangeComponent} />,
      icon: <Apps />,
    },
    {
      title: 'Recycle Bin',
      component: <AllArticles isBin={true} />,
      icon: <DeleteOutline />,
    },
  ];

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
      <CustomDrawer
        session={session}
        components={components}
        handleChangeComponent={handleChangeComponent}
      >
        <div>{components[selectedComponent].component}</div>
      </CustomDrawer>
    </div>
  );
}

export async function getServerSideProps() {
  //   const req = await fetch(`${process.env.NEXTAUTH_URL}/api/articles`);
  //   const articles = (await req.json()).data;

  return {
    props: {
      // articles: articles,
    },
  };
}
