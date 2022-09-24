import { useIsMobile } from '../Helpers';
import Footer from './footer';
import Header, { HeaderProps } from './header';

export default function Layout({ children, ...rest }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <>
      <Header {...rest} />
      <main> {children} </main>
      <Footer />
    </>
  );
}
