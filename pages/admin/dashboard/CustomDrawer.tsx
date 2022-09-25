import { Drawer } from '@mui/material';

type CustomDrawerProps = {
  isOpen: boolean;
};

export default function CustomDrawer({ isOpen }: CustomDrawerProps) {
  return <Drawer open={isOpen}></Drawer>;
}
