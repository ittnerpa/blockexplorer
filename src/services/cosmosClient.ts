import { StargateClient } from '@cosmjs/stargate/build/stargateclient';
import { BASE_URL } from './constants';
export let cosmosClient: StargateClient;

StargateClient.connect(BASE_URL)
  .then((client) => {
    cosmosClient = client;
  })
  .catch(() => {
    throw Error('Failed to initialize cosmos client');
  });
