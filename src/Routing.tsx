import React, { useContext, useEffect } from 'react';
import Explorer from './views/Explorer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blocks from './views/Blocks';
import { useQuery } from 'react-query';
import { Block } from '@cosmjs/stargate';
import { cosmosClient } from './services/cosmosClient';
import { BlockContext } from './store/BlockContext';
import {useQueryBlocks} from "./services/useQueryBlocks";

function Routing() {
    useQueryBlocks();

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
