# NFT Mint NFT Complete

Complete version of the Mint in Bulk NFTs in CHZ network, using Thirdweb. Your can mint your nft's in bulk

## Configuration Process

Follow these steps to properly configure your environment for the application.

### Step 1: Environment File Setup

1. Navigate to the root directory of the project, ensuring you are at the top-level (same level as the `src` directory, not within it).
2. Create a new file and name it `.env.local`. This file will store important global settings required for the application to function correctly.

### Step 2: Environment Variables

Populate the `.env.local` file with the necessary environment variables. These are crucial for linking the application with your specific resources on Thirdweb. Below is a list of the required variables:

-   `NEXT_PUBLIC_CLIENT_ID`: Your unique client identifier from Thirdweb. You can find this by logging into your account, navigating to "Settings," then "API Keys," and selecting your key to view the clientID.
-   `NEXT_PUBLIC_NETWORK`: The specific network name on Thirdweb, e.g., "SpicyChain."
-   `NEXT_PUBLIC_MARKET_CONTRACT_ADDRESS`: The address of your marketplace smart contract.
-   `NEXT_PUBLIC_NFT_CONTRACT_ADDRESS`: The address corresponding to your NFT smart contract.

### Step 3: Dependency Installation

Execute the following command in your terminal to install the project dependencies:

```sh
npm install
```

### Step 4: Launching the Development Server

To start the development server, run:

```sh
npm run dev
```

After opening the project and connecting your wallet, you can view the NFTs you own. Additionally, you have the option to perform a single mint operation or upload an XLS or XLSX file to execute bulk minting operations.

### For mint in bulk examle .xls or .xlsx file : 
![image](https://github.com/sinanyilmaz0/Chiliz-Web3-Mint-Bulk/assets/48128545/93eb9077-b777-41e5-ba3f-c6e8e9d2f93e)

### Mint in Bulk Page :
![image](https://github.com/sinanyilmaz0/Chiliz-Web3-Mint-Bulk/assets/48128545/68502ebc-2bdd-4f41-a4ba-0a12dc539ef9)

### After Mint in Bulk:
![image](https://github.com/sinanyilmaz0/Chiliz-Web3-Mint-Bulk/assets/48128545/34c60d7a-d773-4dc1-a1c7-925d83737f1b)

