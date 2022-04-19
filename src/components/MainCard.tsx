import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GRID_SPACING } from './constants';

interface MainCardProps {
  title: string | React.ReactNode;
  subTitle: string;
  icon?: React.ReactNode;
}

export default function MainCard({ title, subTitle, icon }: MainCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <CardContent>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1">{subTitle}</Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: GRID_SPACING }}>{icon}</Box>
      </Box>
    </Card>
  );
}
