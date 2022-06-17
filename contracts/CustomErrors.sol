// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract CustomErrors {
    error FirstError();
    error SecondError();

    function throwFirstError() external pure {
        revert FirstError();
    }

    function throwSecondError() external pure {
        revert SecondError();
    }

    function justRevert() external pure {
        revert("revert string");
    }
}