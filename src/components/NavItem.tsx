import { Box, Button, Link, ListItem } from '@mui/material';
import React from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

export const NavItem = (props: { href: string; icon: React.ReactNode; title: string }) => {
  const active = false;
  const { href, icon, title, ...others } = props;

  const LinkBehavior = React.forwardRef<any, Omit<LinkProps, 'to'>>((props, ref) => (
    <RouterLink ref={ref} to={href} {...props} />
  ));

  return (
    <ListItem
      component={LinkBehavior}
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <Button
        startIcon={icon}
        disableRipple
        // @ts-ignore
        sx={{
          backgroundColor: active && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: active ? 'secondary.main' : 'neutral.300',
          fontWeight: active && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: active ? 'secondary.main' : 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)'
          }
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};
