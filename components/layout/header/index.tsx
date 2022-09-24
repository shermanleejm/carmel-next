import { StaticImageData } from 'next/image';
import Banner from './Banner';
import NavBar from './NavBar';

export type HeaderProps = {
  title?: string | JSX.Element;
  backgroundImage?: StaticImageData;
  showButtons?: boolean;
  children?: JSX.Element;
};

const Header = ({ title = '', backgroundImage, showButtons = true }: HeaderProps) => {
  return (
    <div>
      <Banner />

      <NavBar backgroundImage={backgroundImage} />

      
    </div>
  );
};

export default Header;
