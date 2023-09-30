import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAnswers } from './actions'; // Define this action

interface Answer {
  id: number;
  text: string;
}

interface AnswersListProps {
  answers: Answer[];
  fetchAnswers: () => void;
}

function AnswersList({ answers, fetchAnswers }: AnswersListProps) {
  useEffect(() => {
    fetchAnswers(); // Fetch answers using Redux action
  }, [fetchAnswers]);

  return (
    <div>
      <h2>Answer List</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: { answers: Answer[] }) => ({
  answers: state.answers,
});

export default connect(mapStateToProps, { fetchAnswers })(AnswersList);

