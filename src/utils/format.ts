import { Block } from '@cosmjs/stargate';
import { TableData } from '../components/MainTable';

export function formatBlockTypeToTableData(blocks: Block[]): TableData[] {
  return blocks.map((block) => {
    return {
      height: block.header.height.toString(),
      hashId: block.id,
      date: block.header.time,
      numberOfTransactions: block.txs.length
    } as TableData;
  });
}
