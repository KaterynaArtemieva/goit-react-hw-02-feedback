import { Title, StatList, StatItem, Accent } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <StatList>
        <StatItem key="good">
          Good:<Accent>{good}</Accent>
        </StatItem>
        <StatItem key="neutral">
          Neutral:<Accent>{neutral}</Accent>
        </StatItem>
        <StatItem key="bad">
          Bad:<Accent>{bad}</Accent>
        </StatItem>
        <StatItem key="total">
          Total:<Accent>{total}</Accent>
        </StatItem>
        <StatItem key="positivePercentage">
          Positive Feedback:<Accent>{positivePercentage}</Accent>%
        </StatItem>
      </StatList>
    </>
  );
};
