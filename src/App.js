import './App.css';
import Card from './components/card';

//3 card props for a cloud plan 
const cardProps = [
  {
    title: 'Basic',
    price: 14.99,
    discount: 9.99,
    benefits: [
      '5 GB Storage',
      '10 GB Bandwidth',
      '3 Domains',
      '1 User',
    ]
  },
  {
    title: 'Standard',
    price: 24.99,
    discount: 19.99,
    benefits: [
      '10 GB Storage',
      '20 GB Bandwidth',
      '5 Domains',
      '2 Users',
    ]
  },
  {
    title: 'Premium',
    price: 44.99,
    discount: 19.99,
    benefits: [
      '20 GB Storage',
      '40 GB Bandwidth',
      '10 Domains',
      '5 Users',
    ]
  }
]


function App() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-purple-50 h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center flex-wrap gap-8 w-full h-full">
      {cardProps.map((cardProp, index) => (
        <Card key={index} {...cardProp} />
      ))}
      </div>
    </div>
  );
}

export default App;
