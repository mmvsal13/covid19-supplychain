pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract TokenFactory is AccessControl {
    struct Token {
        uint256 vaccineCount;
        /* like an ENUM:
            M = Recieved by manufacturer
            D = Recieved by first distributor
            R = Recieved by retailer / hospital / end point
            F = All vaccines in the box are used

            Testing this will be annoying since we'd need multiple different metamask accounts with 
            different permissions to be able to edit different things.
            */
        string status;
        string comments;
        address[] previousOwners;
    }

    Token[] public tokenArray;

    // id => (owner => balance)
    // Each NFT has a unique id
    // balance: 1 if the owner has it, 0 if it doesn't
    mapping(uint256 => mapping(address => uint256)) internal balances;

    modifier ownsToken(uint256 _tokenId) {
        require(
            // TODO,
            "You don't own the token"
        );
        _;
    }

    modifier onlyOwners() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Not The Owner");
        _;
    }

    modifier onlyMinters() {
        require(
            hasRole(MINTERS, msg.sender) ||
                hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "Not The Minter"
        );
        _;
    }

    constructor() public {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function setMinterAuthorization(address _minter, bool status)
        external
        onlyOwners
    {
        // For someone to do
        // See https://docs.openzeppelin.com/contracts/3.x/access-control#role-based-access-control
    }

    function getMinterAuthorization(address _minter)
        external
        view
        returns (bool)
    {
        // For someone to do
        // See https://docs.openzeppelin.com/contracts/3.x/access-control#role-based-access-control
    }

    function getTokenByOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        // loop through tokenToOwner and return tokens belonging to the owner
    }

    function newToken(_vaccineCount, _numTokens) external onlyMinters {
        //  For someone to do, allows minting of tokens
        //  Pretty difficult but give it a shot
    }

    function setStatus(_tokenId, _newStatus) ownsToken(_tokenId) {
        // For someone to do
        // Tentative
    }

    function setVaccineCount(_tokenId, _newCount) ownsToken(_tokenId) {
        // For someone to do
        // Not that important
    }
}
