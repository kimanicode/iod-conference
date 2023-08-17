import React from 'react';

const day1Program = [
  {
    time: '09:00 AM - 09:30 AM',
    title: 'Registration and Networking',
    description: 'Welcome and registration of participants.',
  },
  {
    time: '09:30 AM - 10:00 AM',
    title: 'Opening Ceremony',
    description: 'Official opening of the conference by distinguished guests.',
  },
  {
    time: '10:00 AM - 11:00 AM',
    title: 'Keynote Address',
    description: 'Insights into the importance of corporate governance in today\'s business world.',
  },
  {
    time: '11:15 AM - 12:30 PM',
    title: 'Panel Discussion: Current Trends in Corporate Governance',
    description: 'A discussion on the latest trends and challenges in corporate governance.',
  },
  // Add more Day 1 program items here
];

const day2Program = [
  {
    time: '09:00 AM - 09:30 AM',
    title: 'Registration and Networking',
    description: 'Welcome and registration of participants.',
  },
  {
    time: '09:30 AM - 10:00 AM',
    title: 'Opening Ceremony',
    description: 'Official opening of the conference by distinguished guests.',
  },
  {
    time: '10:00 AM - 11:00 AM',
    title: 'Workshop: Implementing Effective Governance Strategies',
    description: 'Practical insights into implementing governance strategies.',
  },
  {
    time: '11:15 AM - 12:30 PM',
    title: 'Panel Discussion: The Role of Directors in Ensuring Sustainability',
    description: 'Exploring the responsibilities of directors in ensuring sustainability.',
  },
  // Add more Day 2 program items here
];

const Programme = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-semibold mb-4 text-xan">Programme Lineup</h2>
      <div className="space-y-8 text-center">
        <h3 className="text-xl font-semibold mb-2 text-marian">Day 1</h3>
        {day1Program.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <p className="text-gray-600">{item.time}</p>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
        <h3 className="text-xl font-semibold mb-2 text-marian">Day 2</h3>
        {day2Program.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <p className="text-gray-600">{item.time}</p>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programme;
