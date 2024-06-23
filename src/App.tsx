import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
	const [startValueCounter, setStartValueCounter] = useState('');
	const [maxValueCounter, setMaxValueCounter] = useState('');
  const [setValue, setSetValue] = useState({
    maxValue: '',
    startValue: ''
  })
  const [incValue, setIncValue] = useState(setValue.startValue)

  const onChangeStartValue = (value: string) => {
		if (value.match(/^\d*$/)) {
			setStartValueCounter(value);
		}
	};

	const onChangeMaxValue = (value: string) => {
		if (value.match(/^\d*$/)) {
			setMaxValueCounter(value);
		}
	};

  const handlerSet = () => {
    setSetValue({
			...setValue,
			maxValue: (setValue.maxValue = maxValueCounter),
			startValue: (setValue.startValue = startValueCounter)
		});
  }
  const handlerIncrease = () => {
    let value = incValue
    setIncValue(prevValue  => {
      if (setValue.startValue <= setValue.maxValue) {
        return prevValue + 1
      } else {
        return prevValue
      }
    })
  }

	return (
		<div className='App'>
      <div>
        <Counter
          onChangeValue={onChangeStartValue}
          valueCounter={startValueCounter}
          name={"Start"}
        />
        <Counter onChangeValue={onChangeMaxValue} valueCounter={maxValueCounter} name={"Max"} />
        <button onClick={handlerSet}>Set</button>
      </div>
      <div>
        <div>{setValue.startValue}</div>
        <div>{incValue}</div>
        <button onClick={handlerIncrease}>Inc</button>
        <button>Reset</button>
      </div>
		</div>
	);
}

export default App;
