import { useEffect } from 'react';
import { Box, Divider, Drawer, Theme, useMediaQuery } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { Users as UsersIcon } from '../icons/users';
import { Lock as LockIcon } from '../icons/lock';
import { NavItem } from './NavItem';
import { useTheme } from '@mui/styles';

const items = [
  {
    href: '/',
    icon: <ChartBarIcon fontSize="small" />,
    title: 'Explorer'
  },
  {
    href: '/blocks',
    icon: <UsersIcon fontSize="small" />,
    title: 'Blocks'
  },
  {
    href: '/',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Further'
  },
  {
    href: '/',
    icon: <UserIcon fontSize="small" />,
    title: 'Items'
  }
];

export const Sidebar = ({
  open,
  onClose
}: {
  open: boolean;
  onClose: (event?: object) => void;
}) => {
  const theme = useTheme();

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, []);

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3,                   height: 42,
            width: 42 }}>
                <LockIcon />
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            //@ts-ignore
            backgroundColor: theme.palette.neutral['800'],
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
