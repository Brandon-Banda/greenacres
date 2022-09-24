import './FAQ.css';
import { useState } from 'react';

const data = [
  {
    question: 'Parking?',
    answer: 'Park there',
    key: 0,
  },
  {
    question: 'Restroom?',
    answer: 'Ya man',
    key: 1,
  },
  {
    question: 'When',
    answer: '10am to 4pm',
    key: 2,
  },
  {
    question: 'How',
    answer: 'do thing apply yes',
    key: 3,
  },
  {
    question: 'Price',
    answer: '10x10 for $30 or 12x12 for $35',
    key: 4,
  },
  {
    question: 'When is the next one',
    answer: 'We aim monthly',
    key: 5,
  },
  {
    question: 'Cash, Card?',
    answer: 'Most vendors take credit cards',
    key: 6,
  },
];

function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <h1> FAQ </h1>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={item.key}>
              <div
                className="title"
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
              >
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
