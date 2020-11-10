pragma solidity ^0.6.0;


import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol";


contract NewCOVIDCoin is ERC1155, AccessControl {

    uint256 currentId = 0;
    bytes32 public constant MINTERS = keccak256('MINTERS');

    constructor() public ERC1155("https://game.example/api/item/{1}.json") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    modifier onlyMinters() {
        require(
            hasRole(MINTERS, msg.sender) ||
                hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "Not The Minter"
        );
        _;
    }

    modifier onlyOwners() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Not The Owner");
        _;
    }

    function setMinterAuthorization(address _minter, bool status) external onlyOwners {
        if (status == true) {
            grantRole(MINTERS, _minter);
        } else {
            revokeRole(MINTERS, _minter);
        }
    }

    function getTokenByOwner(address _owner) external view returns (uint[] memory){
        address[] memory accounts = new address[](currentId);
        uint256[] memory ids = new uint256[](currentId);
        for (uint i = 0; i < currentId; i++) {
            accounts[i] = _owner;
            ids[i] = i;
        }
        return balanceOfBatch(accounts, ids);
    }


    function mint(uint number) external onlyMinters {
        // _mint(msg.sender, VACCINE_TOKEN, number, "");
        uint256[] memory amounts = new uint256[](number);
        uint256[] memory ids = new uint256[](number);
        for (uint i = 0; i < number; i++) {
            currentId = currentId + 1;
            ids[i] = currentId;
            amounts[i] = 1;
        }
        _mintBatch(msg.sender, ids, amounts, "");
    }
    
}