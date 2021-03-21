pragma solidity ^0.8.0;

import "./external/contracts/token/ERC721/ERC721.sol";
import "./external/contracts/utils/Counters.sol";

contract EddyBuddy is ERC721{

	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;
	mapping(string => uint8) hashes;

	constructor() public ERC721("EddyToken", "UNA") {}

	function awardItem (address recipient, string memory hash, string memory metadata)
 	public returns (uint256){  

 		require(hashes[hash] != 1);  
 		
 		hashes[hash] = 1;  
 		
 		_tokenIds.increment();  
 		
 		uint256 newItemId = _tokenIds.current();  
 		
 		_mint(recipient, newItemId);  
 		
 		return newItemId;
	}
	

}
