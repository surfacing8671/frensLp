export const routerAbi = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_factory",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_WPLS",
              "type": "address"
          }
      ],
      "type": "constructor"
  },
  {
      "inputs": [],
      "name": "WPLS",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountADesired",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountBDesired",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "addLiquidity",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenDesired",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "addLiquidityETH",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "factory",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
          }
      ],
      "name": "getAmountIn",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
          }
      ],
      "name": "getAmountOut",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          }
      ],
      "name": "getAmountsIn",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          }
      ],
      "name": "getAmountsOut",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveA",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "reserveB",
              "type": "uint256"
          }
      ],
      "name": "quote",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "removeLiquidity",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "removeLiquidityETH",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
          },
          {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
          }
      ],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
          },
          {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
          }
      ],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
          },
          {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
          },
          {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
          }
      ],
      "name": "removeLiquidityWithPermit",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapETHForExactTokens",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactTokensForETH",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactTokensForTokens",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapTokensForExactETH",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapTokensForExactTokens",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "type": "receive"
  }
] as const;


export const liquidApi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "factory",
          "type": "address"
        }
      ],
      "name": "addFactoryV2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factoryV3",
          "type": "address"
        },
        {
          "internalType": "uint24[]",
          "name": "_fees",
          "type": "uint24[]"
        }
      ],
      "name": "addFactoryV3",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "addToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "factoryToRouter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "factory",
          "type": "address"
        }
      ],
      "name": "getRouterAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "removeFactoryV2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factoryV3",
          "type": "address"
        }
      ],
      "name": "removeFactoryV3",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "removeToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pair",
          "type": "address"
        }
      ],
      "name": "searchLiqPairB",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pair",
          "type": "address"
        }
      ],
      "name": "searchLiqPairN",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liqBal",
              "type": "uint256"
            },
            {
              "internalType": "uint24",
              "name": "fee",
              "type": "uint24"
            },
            {
              "internalType": "address",
              "name": "router",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tradeType",
              "type": "uint256"
            }
          ],
          "internalType": "struct LiquidityChecker2.LiquidityParams",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "searchLiqPairTokens",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liqBal",
              "type": "uint256"
            },
            {
              "internalType": "uint24",
              "name": "fee",
              "type": "uint24"
            },
            {
              "internalType": "address",
              "name": "router",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tradeType",
              "type": "uint256"
            }
          ],
          "internalType": "struct LiquidityChecker2.LiquidityParams",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factoryV3",
          "type": "address"
        },
        {
          "internalType": "uint24[]",
          "name": "_fees",
          "type": "uint24[]"
        }
      ],
      "name": "updateFactoryV3Fees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]