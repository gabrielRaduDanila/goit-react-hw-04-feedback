import { useState } from 'react';
import FeedbackForm from './feedback-values/FeedbackForm';
import StatisticsRendes from './statistics/StatisticsRendes';

export const App = () => {
  const [goodfb, setGoodfb] = useState(0);
  const [neutralfb, setNeutralfb] = useState(0);
  const [badfb, setBadfb] = useState(0);

  const totalFeedback = goodfb + neutralfb + badfb;

  return (
    <>
      <section className="feedback">
        <SectionTitle title={'Please leave feedback'} />
        <FeedbackForm
          goodfb={goodfb}
          setGoodfb={setGoodfb}
          neutralfb={neutralfb}
          setNeutralfb={setNeutralfb}
          setBadfb={setBadfb}
          badfb={badfb}
        />
      </section>
      <section className="statistics">
        {totalFeedback === 0 && <Notification message="There is no feedback" />}
        {totalFeedback !== 0 && <SectionTitle title={'Statistics'} />}
        {totalFeedback !== 0 && (
          <StatisticsRendes
            countTotalFeedback={totalFeedback}
            good={goodfb}
            neutral={neutralfb}
            bad={badfb}
          />
        )}
      </section>
    </>
  );
};

const SectionTitle = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

const Notification = ({ message }) => {
  return <h3 className="no-message">{message}</h3>;
};
