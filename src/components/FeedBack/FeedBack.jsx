import { Title, Button, Buttons } from './FeedBack.styled';

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
