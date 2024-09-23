import './VoteField.css';

const VoteField = (props) => {
    const handleVoteClick = () => {
        props.onVote();
    };

    return (
        <div className='language-container'>
            <span className='span-score'>{props.votes}</span>
            <span>{props.name}</span>
            <button onClick={handleVoteClick}>Click Here</button>
        </div>
    );
}
 
export default VoteField;