import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UnderlineButton from './UnderlineButton';

export const selectedPath = atom('/');

type MenuButtonProps = {
  children: string | JSX.Element;
  link: string;
  inverted?: boolean;
};

const MenuButton = ({ children, link, ...rest }: MenuButtonProps) => {
  const router = useRouter();
  const [path, setPath] = useAtom(selectedPath);
  const [isUnderlined, setIsUnderlined] = useState(router.pathname === link);

  return (
    <div onClick={() => setPath(link)}>
      <UnderlineButton {...rest} link={link} isUnderlined={isUnderlined}>
        {children}
      </UnderlineButton>
    </div>
  );
};

export default MenuButton;
