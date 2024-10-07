import {useDispatch} from 'react-redux';
import { addReaction } from './state/slice';
import { memo } from 'react';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();
    const { id, reactions } = post;

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key={name}
            className="reactionButton"
            onClick={() => dispatch(addReaction({ id, name }))}>
                {emoji} {reactions[name]}
            </button>
        )
    })
    return (
        <>
            <div>
                {
                    renderReaction
                }
            </div>
        </>
    );
}
 
export default memo(ReactionButton);