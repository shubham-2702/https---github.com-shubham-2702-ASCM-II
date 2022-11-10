export const farmerContractAbi=[
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_price",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_category",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "createProduct",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256[]",
					"name": "_products",
					"type": "uint256[]"
				},
				{
					"internalType": "address",
					"name": "_customerAddress",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_farmerAddress",
					"type": "address"
				}
			],
			"name": "processOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_phone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_email",
					"type": "string"
				}
			],
			"name": "setDetails",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address payable",
					"name": "_distributorAddress",
					"type": "address"
				}
			],
			"name": "setDistributor",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_location",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_phone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_email",
					"type": "string"
				}
			],
			"name": "setFarmerDetails",
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
			"name": "distributor_map",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "distributor_id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "distributor_name",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "distributor_add",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "distributor_rating",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "distributor_phone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "distributor_email",
					"type": "string"
				}
			],
			"stateMutability": "view",
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
			"name": "farmer_map",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "farmer_id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "farmer_name",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "farmer_add",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "distributor_add",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "rating",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "farmer_location",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "farmer_phone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "farmer_email",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "order_map",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "order_id",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "order_price",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "status",
					"type": "bool"
				},
				{
					"internalType": "address",
					"name": "farmer_address",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "customer_address",
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
					"name": "",
					"type": "uint256"
				}
			],
			"name": "product_map",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "product_id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "product_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "product_price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "product_amount",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "product_category",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "isAuthorised",
					"type": "bool"
				},
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "viewProductsFarmer",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "product_id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "product_name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "product_price",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "product_amount",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "product_category",
							"type": "string"
						},
						{
							"internalType": "bool",
							"name": "isAuthorised",
							"type": "bool"
						},
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						}
					],
					"internalType": "struct Product.product[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]


export const farmerContractAddress =
  "0xaD02CE0D5FdCafca7c90486Ad40846640fB6d136";