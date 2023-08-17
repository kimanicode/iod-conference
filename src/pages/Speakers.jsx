import React from 'react';
import speaker1Image from '../assets/mudavadi.jpg';
import speaker2Image from '../assets/Nelson.png';
import speaker3Image from '../assets/Mwangi_profile.jpg';
import speaker4Image from '../assets/tuya.jpg';
import speaker5Image from '../assets/joy.jpg';
import speaker6Image from '../assets/donald.png';
import speaker7Image from '../assets/bat.png';
import speaker8Image from '../assets/eabl.png';
import speaker9Image from '../assets/chiromo.png';
import speaker10Image from '../assets/karanja.png';
import speaker11Image from '../assets/okumbe.jpg';
import speaker12Image from '../assets/munda.png';
import speaker13Image from '../assets/olunya.jpg';
import speaker14Image from '../assets/wanjira.png';
import speaker15Image from '../assets/Odundo.jpg';
import speaker16Image from '../assets/issb.png';



const speakersData = [
  {
    name: 'Hon. Musalia Mudavadi',
    image: speaker1Image,
    description: 'Prime Cabinet Secretary, Republic of Kenya',
    topic: 'Topic: Opening Remarks and Official opening of the Summit.',
  },
  {
    name: 'Dr. Nelson Kuria',
    image: speaker2Image,
    description: 'Chairman, Institute of Directors Kenya',
    topic: 'Topic: The Director’s roles in ESG Compliance.',
  },
  {
    name: 'Dr. James Mwangi',
    image: speaker3Image,
    description: 'CEO, Equity Group',
    topic: 'Topic: Best practices in Sustainability Reporting.',
  },
  {
    name: 'Hon. Roselinda Soipan Tuya',
    image: speaker4Image,
    description: 'Environment Cabinet Secretary, Republic of Kenya',
    topic: 'Topic: Initiates and Interventions on Climate Governance - Lessons from the Public Sector.',
  },
  {
    name: 'Ms. Joy Mdivo',
    image: speaker5Image,
    description: 'Chair, Kenya Power Limited',
    topic: 'Topic: Environmental protection and the social impacts; Lessons from Kenya Power.',
  },
  {
    name: 'Mr. Donald Mavunduse',
    image: speaker6Image,
    description: 'MIoD - UK',
    topic: 'Topic: Best practices in Environment Social Governance; Lessons from the OECD.',
  },
  {
    name: 'British American Tobacco (BAT)',
    image: speaker7Image,
    description: '',
    topic: 'Topic: Resilient lessons from the banking Industry.',
  },

  {
    name: 'East Africa Breweries Limited',
    image: speaker8Image,
    description: '',
    topic: 'Topic: Lessons from EABL on Social Governance and business sustainability.',
  },
  
  {
    name: 'Chiromo Hospital Group',
    image: speaker9Image,
    description: '',
    topic: 'Topic: Promoting mental Health and Wellness among Leaders, as Social Responsibility.',
  },
  {
    name: 'CPS Elijah Karanja',
    image: speaker10Image,
    description: 'CEO, ICS (Kenya)',
    topic: 'Panelist',
  },
  {
    name: 'Dr. Joshua Okumbe',
    image: speaker11Image,
    description: 'CEO, Centre for Corporate Governance',
    topic: 'Panelist',
  },

  {
    name: 'Ms. Celestine Munda',
    image: speaker12Image,
    description: 'CEO, Centre for Corporate Governance',
    topic: 'Panelist',
  },
  {
    name: 'Ms. Madren Oluoch Olunya',
    image: speaker13Image,
    description: 'CEO, Centre for Corporate Governance',
    topic: 'Panelist',
  },
  {
    name: 'Wanjira Mathai',
    image: speaker14Image,
    description: 'Vice President and Regional Director for Africa, World Resources Institute',
    topic: 'Panelist',
  },
  {
    name: 'DR. Edward Odundo',
    image: speaker15Image,
    description: 'Director at School of Pension and Retirement Studies',
    topic: 'Panelist',
  },
  {
    name: 'ISSB Representative',
    image: speaker16Image,
    topic: 'Panelist',
  },



];

const Speakers = () => {
  return (
    <div className='bg-slate-100  p-5'>
        <h3 className='text-center text-xan md:text-3xl font-bold'>Meet Our Esteemed Speakers</h3>


        <div className="flex flex-wrap justify-center bg-slate-100 gap-6 p-5">
        
        {speakersData.map((speaker, index) => (
            <div key={index} className="bg-white w-64 mx-4 my-4 rounded-lg shadow-md overflow-hidden hover:bg-slate-100">
            <img
                src={speaker.image}
                alt={`Speaker ${index + 1}`}
                className="w-full md:h-2/4 object-cover p-3 rounded-2xl"
            />
            <div className="p-3">
                <h3 className="text-lg text-marian font-semibold mb-2">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.description}</p>
                <p className="text-xan py-2">{speaker.topic}</p>
            </div>
            </div>
      ))}
    </div>
    </div>
  );
};

export default Speakers;
