import { AiTool, getChainName } from '@heyanon/sdk';
import { supportedChains } from './constants';

export const tools: AiTool[] = [
    {
        name: 'addLiquidity',
        description: 'Add liquidity to an Equalizer pair. Approves token spending if necessary.',
        required: ['chainName', 'account', 'token0Address', 'token1Address', 'isStable', 'amount0Desired', 'amount1Desired', 'amount0Min', 'amount1Min'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'Chain name where to add liquidity',
            },
            {
                name: 'account',
                type: 'string',
                description: 'Account address that will provide liquidity',
            },
            {
                name: 'token0Address',
                type: 'string',
                description: 'Contract address of the first token',
            },
            {
                name: 'token1Address',
                type: 'string',
                description: 'Contract address of the second token',
            },
            {
                name: 'isStable',
                type: 'boolean',
                description: 'Whether the pair is a stable pair',
            },
            {
                name: 'amount0Desired',
                type: 'string',
                description: 'Desired amount of first token to add in decimal format',
            },
            {
                name: 'amount1Desired',
                type: 'string',
                description: 'Desired amount of second token to add in decimal format',
            },
            {
                name: 'amount0Min',
                type: 'string',
                description: 'Minimum amount of first token to add (slippage protection) in decimal format',
            },
            {
                name: 'amount1Min',
                type: 'string',
                description: 'Minimum amount of second token to add (slippage protection) in decimal format',
            },
            {
                name: 'deadline',
                type: 'number',
                description: 'Unix timestamp deadline for the transaction',
                optional: true,
            },
        ],
    },
    {
        name: 'claimAllRewards',
        description: 'Claims all rewards earned from voting with a veNFT, including gauge and bribe rewards from Equalizer',
        required: ['chainName', 'account', 'tokenId', 'gauges', 'gtokens', 'bribes', 'btokens'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'Chain name where to claim rewards',
            },
            {
                name: 'account',
                type: 'string',
                description: 'Account address that owns the veNFT',
            },
            {
                name: 'tokenId',
                type: 'number',
                description: 'ID of the veNFT',
            },
            {
                name: 'gauges',
                type: 'array',
                description: 'Array of gauge addresses to claim from',
            },
            {
                name: 'gtokens',
                type: 'array',
                description: 'Array of arrays containing reward token addresses for each gauge',
            },
            {
                name: 'bribes',
                type: 'array',
                description: 'Array of bribe addresses to claim from',
            },
            {
                name: 'btokens',
                type: 'array',
                description: 'Array of arrays containing reward token addresses for each bribe',
            },
        ],
    },
];
