const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("CustomErrors testing scope", function () {
  let customErr, signer;
  
  before("setup", async function () {
    const CustomErrors = await ethers.getContractFactory("CustomErrors");
    customErr = await CustomErrors.deploy();
    await customErr.deployed();
    [signer] = await ethers.provider.listAccounts();
  });

  it("it should revert when calling throwFirstError()", async function () {
    await expect(customErr.throwFirstError()).to.be.reverted;
    try {
        await customErr.throwFirstError();
    } catch (e) {
        console.log(e);
    }
  });

  it("it should revert when calling justRevert()", async function () {
    await expect(customErr.justRevert()).to.be.reverted;
    try {
        await customErr.justRevert();
    } catch (e) {
        console.log(e);
    }
  });
});