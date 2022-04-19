import {useEffect, useContext} from 'react';
import {useQuery} from "react-query";
import {Block} from "@cosmjs/stargate";
import {cosmosClient} from "./cosmosClient";
import {BlockContext} from "../store/BlockContext";

export function useQueryBlocks() {
    const BlockQuery = useQuery<Block, Error>('Block', () =>
        cosmosClient.getBlock().then((block) => block)
    );
    const { addBlock } = useContext(BlockContext);

    useEffect(() => {
        if (typeof addBlock !== 'undefined' && typeof BlockQuery?.data !== 'undefined')
            addBlock(BlockQuery.data);
    }, [BlockQuery.data]);
}