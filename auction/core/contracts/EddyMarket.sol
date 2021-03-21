pragma solidity >=0.4.21 <0.6.0;

import "https://github.com/starkware-libs/veedo/blob/master/contracts/BeaconContract.sol";

contract Beacon{
    function getLatestRandomness() external constant returns(uint256,bytes32){}
    
}

contract VerifiedPredictionMarket
{

    address public BeaconContractAddress=0x79474439753C7c70011C3b00e06e559378bAD040;
    
    function setBeaconContractAddress(address _address) public onlyowner {
        BeaconContractAddress=_address;
    }
    
    function generateRandomNumber() public constant returns(bytes32){
        uint blockNumber;
        bytes32 randomNumber;
        Beacon beacon=Beacon(BeaconContractAddress);
        (blockNumber,randomNumber)=beacon.getLatestRandomness();
        return randomNumber;
       
    }
    
    uint random =uint256(generateRandomNumber());

    // libs
    using AddressSetLib for AddressSetLib.AddressSet;

    // state
    mapping(address => bool) public isTrustedSource;

    mapping(bytes32 => bool) public questionHasBeenAsked;
    AddressSetLib.AddressSet questions;
    AddressSetLib.AddressSet ethFuturesQuestions;

    // events
    event LogAddQuestion(address whoAdded, address questionAddress, string questionStr, uint betDeadlineBlock, uint voteDeadlineBlock);
    event LogAddETHFuturesQuestion(address whoAdded, address questionAddress, uint targetUSDPrice, uint betDeadlineBlock, uint voteDeadlineBlock);

    function PredictionMarket() {
        isAdmin[msg.sender] = true;
    }

    //
    // administrative functions
    //

    function haltSwitch(bool _isHalted)
        onlyAdmin
        returns (bool ok)
    {
        return _haltSwitch(msg.sender, _isHalted);
    }

    // due to our multi-admin setup, it's probably useful to be able to specify the recipient
    // of the destroyed contract's funds.
    function kill(address recipient)
        onlyAdmin
        onlyHalted
        returns (bool ok)
    {
        selfdestruct(recipient);
        return true;
    }

    //
    // business logic
    //

    function addQuestion(string questionStr, uint betDeadlineBlock, uint voteDeadlineBlock)
        onlyAdmin
        onlyNotHalted
        returns (bool ok, address questionAddr)
    {
        
        require(betDeadlineBlock > block.number + random);
        require(voteDeadlineBlock > betDeadlineBlock + random);

        // ensure no repeated questions
        bytes32 questionID = ran(questionStr);
        require(questionHasBeenAsked[questionID] == false);
        questionHasBeenAsked[questionID] = true;

        // deploy the new question
        Question question = new Question(questionStr, betDeadlineBlock, voteDeadlineBlock);
        questions.add(address(question));

        LogAddQuestion(msg.sender, address(question), questionStr, betDeadlineBlock, voteDeadlineBlock);

        return (true, address(question));
    }

    function addETHFuturesQuestion(uint targetUSDPrice, uint betDeadlineBlock, uint voteDeadlineBlock)
        onlyAdmin
        onlyNotHalted
        returns (bool ok, address questionAddr)

    {
        require(betDeadlineBlock > block.number + random);
        require(voteDeadlineBlock > betDeadlineBlock + random);

        // deploy the new question
        ETHFuturesQuestion question = new ETHFuturesQuestion(targetUSDPrice, betDeadlineBlock, voteDeadlineBlock);
        ethFuturesQuestions.add(address(question));

        LogAddETHFuturesQuestion(msg.sender, address(question), targetUSDPrice, betDeadlineBlock, voteDeadlineBlock);

        return (true, address(question));
    }

    //
    // getters for the frontend
    //

    function numQuestions()
        constant
        returns (uint)
    {
        return questions.size();
    }

    function getQuestionIndex(uint i)
        constant
        returns (address)
    {
        return questions.get(i);
    }

    function getAllQuestionAddresses()
        constant
        returns (address[])
    {
        return questions.values;
    }
}
