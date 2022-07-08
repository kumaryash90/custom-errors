const { ethers } = require("ethers");
const artifact = require("../artifacts/contracts/SignatureDrop.json");

require("dotenv").config();

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(`${process.env.PROVIDER}`);
    const signer1 = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const signer2 = new ethers.Wallet(process.env.RANDOM_PRIVATE_KEY, provider);
    const sigdrop = new ethers.Contract("0x7b789c9ab61dA9112315217787C2f4e48698E4C1", artifact.abi, signer1);

    // let tx1 = await sigdrop.tokenURI(0);

    let tx2 = await sigdrop.verifyClaim("0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 0, "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 1, false);

    // let tx3 = await sigdrop.connect(signer2).setOwner("0x7b789c9ab61dA9112315217787C2f4e48698E4C1");

}

main();

// const { expect, assert } = require("chai");


// describe("SignatureDrop testing scope", function () {
//   let sigdrop, signer1, signer2;
  
//   before("setup", async function () {
//     const provider = new ethers.providers.JsonRpcProvider(`${process.env.PROVIDER}`);
//     signer1 = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
//     signer2 = new ethers.Wallet(process.env.RANDOM_PRIVATE_KEY, provider);

//     sigdrop = new ethers.Contract("0x7b789c9ab61dA9112315217787C2f4e48698E4C1", artifact.abi, signer1);
//   });

//   it("it should revert when calling tokenURI(uint256 _tokenId)", async function () {
//     await expect(sigdrop.tokenURI(0)).to.be.reverted;
//     try {
//         await sigdrop.tokenURI(0);
//     } catch (e) {
//         console.log(e);
//     }
//   });

//   it("it should revert when calling verifyClaim(address,uint256,address,uint256,bool)", async function () {
//     await expect(
//         await sigdrop.verifyClaim(
//             "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 
//             0, 
//             "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 
//             1, 
//             false)
//         ).to.be.reverted;
//     try {
//         await sigdrop.verifyClaim(
//             "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 
//             0, 
//             "0xFD78F7E2dF2B8c3D5bff0413c96f3237500898B3", 
//             1, 
//             false
//         );
//     } catch (e) {
//         console.log(e);
//     }
//   });

//   it("it should revert when calling setContractURI(string)", async function () {
//     await expect(await sigdrop.connect(signer2).setContractURI("")).to.be.reverted;
//     try {
//         await await sigdrop.connect(signer2).setContractURI("");
//     } catch (e) {
//         console.log(e);
//     }
//   });
// });