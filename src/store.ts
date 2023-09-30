import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface Question {
  id: number;
  text: string;
}

interface Answer {
  id: number;
  text: string;
}

interface Message {
  id: number;
  text: string;
}

// Define reducers for questions, answers, and messages
const questionsReducer = (state: Question[] = [], action: any) => {
  // Handle actions here
};

const answersReducer = (state: Answer[] = [], action: any) => {
  // Handle actions here
};

const messagesReducer = (state: Message[] = [], action: any) => {
  // Handle actions here
};

// Combine reducers
const rootReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  messages: messagesReducer,
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

