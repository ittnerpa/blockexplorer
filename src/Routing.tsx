import React, { useContext, useEffect } from 'react';
import Explorer from './views/Explorer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blocks from './views/Blocks';
import { useQuery } from 'react-query';
import { Block } from '@cosmjs/stargate';
import { cosmosClient } from './services/cosmosClient';
import { BlockContext } from './store/BlockContext';

function Routing() {
  const BlockQuery = useQuery<Block, Error>('Block', () =>
    cosmosClient.getBlock().then((block) => block)
  );
  const { addBlock } = useContext(BlockContext);

  useEffect(() => {
    if (typeof addBlock !== 'undefined' && typeof BlockQuery?.data !== 'undefined')
      addBlock(BlockQuery.data);
  }, [BlockQuery.data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Explorer />} />
        <Route path="/blocks" element={<Blocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
