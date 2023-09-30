import React from 'react';

interface Answer {
  id: number;
  text: string;
}

interface AnswerDetailProps {
  answer: Answer;
}

function AnswerDetail({ answer }: AnswerDetailProps) {
  return (
    <div>
      <h3>Selected Answer</h3>
      <p>{answer.text}</p>
      {/* Add UI for displaying related messages */}
    </div>
  );
}

export default AnswerDetail;

