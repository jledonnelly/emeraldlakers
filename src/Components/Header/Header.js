import React, { useState } from 'react';
import styles from './Header.module.css';
export default function Header() {
	const questions = [
		{
			questionText: 'Which NBA team wears yellow and purple?',
			answerOptions: [
				{ answerText: 'Boston Celtics', isCorrect: false },
				{ answerText: 'Miami Heat', isCorrect: false },
				{ answerText: 'Los Angeles Lakers', isCorrect: true },
				{ answerText: 'New Jersey Nets', isCorrect: false },
			],
		},
		{
			questionText: 'When did the NBA begin?',
			answerOptions: [ 
				{ answerText: '1946', isCorrect: false },
				{ answerText: '1949', isCorrect: true },
				{ answerText: '1946', isCorrect: false },
				{ answerText: '1922', isCorrect: false },
			],
		},
		{
			questionText: 'How many teams does the Eastern and Western Conference have?',
			answerOptions: [
				{ answerText: '15', isCorrect: true },
				{ answerText: '9', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '20', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these NBA Players is Australian?',
			answerOptions: [
				{ answerText: 'Larry Bird', isCorrect: false },
				{ answerText: 'LeBron James', isCorrect: false },
				{ answerText: 'Michael Jordan', isCorrect: false },
				{ answerText: 'Andrew Bogut', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}