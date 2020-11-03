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
    mapping(address => uint256) internal ownerTokenCount;

    modifier ownsToken(uint256 _tokenId) {
        require(
            (balances[_tokenId][msg.sender] == 1),
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

    function setMinterAuthorization(address _minter, bool status) external onlyOwners {
        if (status == true) {
            grantRole(MINTERS, _minter);
        } else {
            revokeRole(MINTERS, _minter);
        }
    }

    function getMinterAuthorization(address _minter) external view returns (bool) {
        return hasRole(MINTERS, _minter);
    }

    function getTokenByOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256[] memory result = new uint256[](ownerTokenCount[_owner]);
        uint256 counter = 0;
        for (uint256 i = 0; i < tokenArray.length; i++) {
            if (balances[i][_owner] == 1) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    function newToken(_vaccineCount, _numTokens) external onlyMinters {
        uint256 idStart = tokenArray.length;
        for (uint256 i = 0; i < tokens; i++) {
            tokenArray.push(Token( tokenArray.length));
            uint256 id = tokenArray.length - 1;
            tokenToOwner[id] = msg.sender;
            ownerTokenCount[msg.sender]++;
        }
        emit MintToken(idStart, idStart + tokens - 1, _status, _limit, 0);

    }

    function setStatus(_tokenId, _newStatus) ownsToken(_tokenId) {
        // For someone to do
        //letter that represents where vaccine is, takes in string and change sttus of token to be that string
        token = tokenArray[_tokenId];
        token.status = _newStatus;
        // Melissa
    }

    function setVaccineCount(uint _tokenId, uint _newCount) ownsToken(_tokenId) {
        // For someone to do
        //take in number and set that to be tokens count 
        token = tokenArray[_tokenId];
        token.vaccineCount = _newCount;
        //in the future restrict - might get rid of this function so that once fda approves token amt it can never be changed
        // Melissa
    }

    function addTransaction(uint _tokenId, address _prevOwner) ownsToken(_tokenid) {
        // Updates the previous owners array 
        //take token id and change how many tokens one address has 
        //add the prev_owner on to the array of addresses
        //in another file we can take care of transactional logic
        token = tokenArray[_tokenId];
        token.previousOwners.push(_prevOwner);
        // Melissa
    }
}
