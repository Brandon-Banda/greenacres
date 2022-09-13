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
    answer: 'No when did i ask',
    key: 2,
  },
];

function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
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

/*

Questions could be:

Parking? where?

Restroom?

Dates? vary


*/
