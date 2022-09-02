solidity smart contract > deploy to polygon, eth blockchain
nextjs
tailwind

set up metamask

heroicons

thirdweb

inside lottery-smart folder => npx thirdweb@latest release //

when developing crypto app -> do on testnet -> fund yourself with free money

https://thirdweb.com/contracts/release/QmbX4ro1bPED1V7UKM81Qp7d7TgKhWmdAVyuAa11GPi9h4
connect to metamask
switch to Mumbai network
hit release -> will need to switch to Polygon network
sign

on next page, hit deploy ->>> CHOOSE TESTNET (MUMBAI)

wait, no gas? GO to poygon mumbai faucet -> copy address from MetaMask -> submit.

Go back to thirdweb -> deploy

in the next page, you see a list of lottery functions
Buy 0.05 tickets -> check getickets return 5 tickets from the same address

Note: each deployment returns new smart contract address

Now on Thirdweb go to code tab, install smart contract into the main app
Use the third web sdk documentation, wrap the app inside thirdweb component
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers

npm i react-spinners //for loading effect

npm i react-countdown // for timer

npm i react-hot-toast
add toaster at highest level


npm i react-fast-marquee