// const { readFileSync } = require("fs");
const { ThirdwebSDK } = require("@thirdweb-dev/sdk");
const ethers = require("ethers");

require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const sdk = new ThirdwebSDK(wallet);

(async() => {
    try {
        const sigdropAddress = sdk.deployer.deploySignatureDrop({
            name: "My Signature Drop",
            primary_sale_recipient: "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3",
        });

        const sigdrop = sdk.getSignatureDrop(sigdropAddress);
        const metadata = await sigdrop.metadata.get();

        console.log("deployed sig drop at: ", sigdropAddress);
        console.log("sig drop metadata: ", metadata);
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
})();