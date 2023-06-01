import React from 'react';
import PropTypes from 'prop-types'
import { ButtonList, Item, Button } from "./FeedBackOptions.styled";

const FeedBackOptions = ({options, onLeaveFeedback}) => {
return (
    <ButtonList>
        {options.map((el)=>(
<Item>
    <Button name = {el} type="button" onClick={()=> onLeaveFeedback(el)}>{el}</Button></Item>
        ))}
    </ButtonList>
);
};
FeedBackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.func.isRequired,
        neutral: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedBackOptions;