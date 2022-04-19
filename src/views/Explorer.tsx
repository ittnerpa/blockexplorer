import React, { useContext } from 'react';

import { Box, Container, Grid } from '@mui/material';
import { GRID_SPACING } from '../components/constants';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import MainTable from '../components/MainTable';
import MainCard from '../components/MainCard';
import { BlockContext } from '../store/BlockContext';
import { formatBlockTypeToTableData } from '../utils/format';
import { MainLayout } from '../components/Mainlayout';

const Explorer = (): JSX.Element => {
  const { blocks, lastBlock } = useContext(BlockContext);

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
            <Grid item xs={12} md={4}>
              <Grid container justifyContent="center" spacing={GRID_SPACING} >
                  <Grid item xs={12}>
                <MainCard
                  title={lastBlock?.header?.height ?? '-'}
                  subTitle={'Current height'}
                  icon={<GridViewSharpIcon />}
                />
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container justifyContent="center" spacing={GRID_SPACING}>
                <Grid item xs={12}>
                <MainCard title={lastBlock?.header?.height ?? '-'} subTitle={'Current height'} icon={<GridViewSharpIcon />}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container justifyContent="center" spacing={GRID_SPACING}>
                <Grid item xs={12}>
                <MainCard title={lastBlock?.header?.height ?? '-'} subTitle={'Current height'} icon={<GridViewSharpIcon />}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={GRID_SPACING}>
                <Grid item xs={12}>
                <MainTable rows={formatBlockTypeToTableData(blocks)} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Explorer;
