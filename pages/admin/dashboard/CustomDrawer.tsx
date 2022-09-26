import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { DrawerComponentType } from '.';
import { Dispatch, SetStateAction } from 'react';
import OutlinedButton from '../../../components/buttons/OutlinedButton';

type CustomDrawerProps = {
  session?: Session;
  setSelectedComponent: Dispatch<SetStateAction<number>>;
  components: DrawerComponentType[];
  children: JSX.Element;
};

export default function CustomDrawer({
  session,
  components,
  children,
  setSelectedComponent,
}: CustomDrawerProps) {
  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Grid container direction={'row'} justifyContent={'space-between'}>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  Welcome {`${session?.user?.name}`}
                </Typography>
              </Grid>
              <Grid item>
                <OutlinedButton onClick={() => signOut({ callbackUrl: '/' })}>
                  sign out
                </OutlinedButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {components.map((comp, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => setSelectedComponent(index)}>
                    <ListItemIcon>{comp.icon}</ListItemIcon>
                    <ListItemText primary={comp.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div style={{ marginLeft: drawerWidth }}>{children}</div>
      </Box>
    </div>
  );
}
