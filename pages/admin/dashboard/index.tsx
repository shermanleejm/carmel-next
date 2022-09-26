import { CircularProgress } from '@mui/material';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/pages/Dashboard.module.css';
import CustomDrawer from './CustomDrawer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppsIcon from '@mui/icons-material/Apps';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NewPost from '../../../components/texteditor/NewPost';
import AllArticles from '../../../components/admin/AllArticles';
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
  const [selectedComponent, setSelectedComponent] = useState(2);
  const [article, setArticle] = useState<Articles>();

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
      icon: <AddCircleIcon />,
    },
    {
      title: 'All Articles',
      component: <AllArticles handleChangeComponent={handleChangeComponent} />,
      icon: <AppsIcon />,
    },
    {
      title: 'Recycle Bin',
      component: <AllArticles isBin={true} />,
      icon: <DeleteOutlineIcon />,
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
