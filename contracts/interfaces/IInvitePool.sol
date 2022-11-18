// SPDX-License-Identifier: MIT

pragma solidity =0.6.12;
pragma experimental ABIEncoderV2;

//import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IInvitePool  {
    function getOneUpper(address user) external view returns (address);
    function getOneLevelLists(address addr) external view returns (address[] memory);
}