import React, { useContext } from 'react';

import { Box, Container, Grid, ThemeProvider } from '@mui/material';
import { GRID_SPACING } from '../components/constants';
import MainTable from '../components/MainTable';
import { BlockContext } from '../store/BlockContext';
import { formatBlockTypeToTableData } from '../utils/format';
import { MainLayout } from '../components/Mainlayout';

const Blocks = (): JSX.Element => {
  const { blocks } = useContext(BlockContext);
  return (
    <MainLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={GRID_SPACING}>
            <Grid item xs={12}>
              <MainTable rows={formatBlockTypeToTableData(blocks)} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Blocks;
