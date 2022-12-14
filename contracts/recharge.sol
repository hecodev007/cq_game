// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.12;

import "hardhat/console.sol";

import "@openzeppelin/contracts/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract Recharge is Ownable {
    using SafeMath for uint256;

    // bytes32 public root;

    IERC20  public tokenERC20;

    mapping(uint256 => mapping(address => uint256)) public withDrawRecord;
    mapping(uint256 => mapping(address => uint256)) public withDrawBnbRecord;
    mapping(uint256 => mapping(address => uint256)) public withDrawFee;
    mapping(address => bool) tokenList;
    address  public adminer;

    event RechargeEvent(address user, address token, uint256 amount);
    event WithDrawFeeEvent(address user, uint256 txid, uint256 amount);

    receive() external payable {
        revert("R");
    }

    constructor(address[] memory tokens) public {
        for (uint256 i = 0; i < tokens.length; i++) {
            tokenList[tokens[i]] = true;
        }
    }


    function setToken(address _tokenERC20, bool power) public onlyOwner {
        // tokenERC20 = IERC20(_tokenERC20);
        tokenList[_tokenERC20] = power;
    }

    function setAdmin(address _admin) public onlyOwner {
        adminer = _admin;
    }

    function withdraw(uint256 txId, address _to, address token, uint256 _amount) external onlyOwner {
        require(tokenList[token] == true, "not allowed token");
        tokenERC20 = IERC20(token);
        SafeERC20.safeTransfer(
            tokenERC20,
            _to,
            _amount
        );

        withDrawRecord[txId][_to] = _amount;
    }

    function withdrawBnb(uint256 txId, address _to, uint256 _amount) external onlyOwner {
        address payable recipient = payable(_to);
        recipient.transfer(_amount);
        withDrawBnbRecord[txId][_to] = _amount;
    }

    function withdrawFee(uint256 txId) public payable {
        if (msg.value > 0) {//spike turn borrow celery alone unaware island debris process athlete reason flock
            require(adminer != address(0), "not set adminer");
            withDrawFee[txId][msg.sender] = msg.value;
            address payable recipient = payable(adminer);
            recipient.transfer(msg.value);
            emit WithDrawFeeEvent(msg.sender, txId, msg.value);
        }
    }

    function recharge(
        uint256 amount,
        address token
    ) public payable {
        //address token;
        if (msg.value > 0) {
            token = address(0);
            amount = msg.value;
        } else {
            require(tokenList[token] == true, "not allowed token");
            tokenERC20 = IERC20(token);
           // console.log(token);
            require(tokenERC20.balanceOf(address(msg.sender)) >= amount, "token balance is not enough");
            require(tokenERC20.allowance(msg.sender, address(this)) >= amount, "token allowance is not enough");
            SafeERC20.safeTransferFrom(tokenERC20, msg.sender, address(this), amount);
            //  token = address(tokenERC20);
        }

        emit RechargeEvent(msg.sender, token, amount);
    }
}
