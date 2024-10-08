import { memo } from 'react';
import { useAddReaction } from './state/hooks';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const ReactionButton = ({ post }) => {
    const { id, reactions } = post;

const callAddReaction = useAddReaction();

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key={name}
            className="reactionButton"
            onClick={() => callAddReaction(id, name)}>
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