import {
  AppBar,
  Box,
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
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { DrawerComponentType } from 'pages/admin/dashboard';
import OutlinedButton from '../buttons/OutlinedButton';
import { Articles } from '@prisma/client';

type CustomDrawerProps = {
  session?: Session;
  handleChangeComponent: (index: number, article: Articles) => void;
  components: DrawerComponentType[];
  children: JSX.Element;
};

export default function CustomDrawer({
  session,
  components,
  children,
  handleChangeComponent,
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
                  <ListItemButton
                    onClick={() =>
                      handleChangeComponent(index, { content: '' } as Articles)
                    }
                  >
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
