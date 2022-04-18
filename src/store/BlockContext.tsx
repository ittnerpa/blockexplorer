import * as React from 'react';
import { Block } from '@cosmjs/stargate';

export type IBlockContext = {
  blocks: Block[];
  lastBlock?: Block;
  addBlock?: (block: Block) => void;
};

export const BlockContext = React.createContext<IBlockContext>({ blocks: [] });

const BlockProvider = ({ children }: { children: React.ReactNode }) => {
  const [blocks, setBlocks] = React.useState<Block[]>([]);
  const [lastBlock, setLastBlock] = React.useState<Block>({} as Block);
  const addBlock = (newBlock: Block) => {
    setLastBlock(newBlock);
    setBlocks([...blocks, newBlock]);
  };
  return (
    <BlockContext.Provider value={{ blocks, lastBlock, addBlock }}>
      {children}
    </BlockContext.Provider>
  );
};

export default BlockProvider;
