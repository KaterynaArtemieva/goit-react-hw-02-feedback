import { Title, Button, Buttons } from './FeedBack.styled';
import PropTypes from 'prop-types';

export const FeedBack = ({ title, btns, onClickFeedback }) => {
  return (
    <>
      {title ? <Title>{title}</Title> : null}
      <Buttons>
        {btns.map(btn => (
          <Button onClick={onClickFeedback} name={btn} key={btn}>
            {btn}
          </Button>
        ))}
      </Buttons>
    </>
  );
};

FeedBack.propTypes = {
  title: PropTypes.string.isRequired,
  btns: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickFeedback: PropTypes.func.isRequired,
}