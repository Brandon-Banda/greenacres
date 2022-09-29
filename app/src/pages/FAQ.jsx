import './FAQ.css';
import { useState } from 'react';

const data = [
  {
    question: 'Where do we park?',
    answer: 'Feel free to park anywhere on the grass!',
    key: 0,
  },
  {
    question: 'Are there restrooms?',
    answer: 'We have a restroom for anyone who might need it.',
    key: 1,
  },
  {
    question: 'What are the hours?',
    answer: 'We operate 10AM-4PM, but this fluctuates depending on weather.',
    key: 2,
  },
  {
    question: 'How do I sell here?',
    answer:
      'Submit an application to become a vendor via the application page of the website.',
    key: 3,
  },
  {
    question: 'How much does it cost to sell here?',
    answer: 'We sell by sizing. 10x10 for $30 or 12x12 for $35.',
    key: 4,
  },
  {
    question: 'When is the next one?',
    answer:
      'We aim for events monthly. Accurate updates will be posted on our Facebook.',
    key: 5,
  },
  {
    question: 'Cash, Card?',
    answer: 'Most vendors accept credit cards.',
    key: 6,
  },
  {
    question: 'Other questions',
    answer: 'Call (361) 533 - 2590 for any unanswered questions.',
    key: 7,
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
    <div className="container">
      <div className="heading"> Frequently asked Questions</div>
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
    </div>
  );
}

export default FAQ;
