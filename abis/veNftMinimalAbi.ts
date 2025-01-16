export const veNftMinimalAbi = [
    {
        inputs: [
            { internalType: 'address', name: '_operator', type: 'address' },
            { internalType: 'bool', name: '_approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_owner', type: 'address' },
            { internalType: 'address', name: '_operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_spender', type: 'address' },
            { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
        ],
        name: 'isApprovedOrOwner',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
