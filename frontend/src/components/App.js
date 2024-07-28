import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

function App() {
  const [month, setMonth] = React.useState('March');

  return (
    <div className="App">
      <h1>Transactions Dashboard</h1>
      <TransactionsTable month={month} setMonth={setMonth} />
      <Statistics month={month} />
      <BarChart month={month} />
    </div>
  );
}

export default App;
