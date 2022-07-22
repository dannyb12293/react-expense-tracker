import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id:1,
      title: 'Car Insurance',
      amount: 200.23,
      date: new Date(2022, 6,6),
    },
    {
      id:2,
      title: 'Gas',
      amount: 75.44,
      date: new Date(2022, 6, 23),
    },
    {
      id:3,
      title: 'Rent',
      amount: 2300.00,
      date: new Date(2022, 6,1),
    },
    {
      id:4,
      title: 'Food',
      amount: 35.54,
      date: new Date(2022, 6, 11),
    },
  ];
  const addExpenseHandler = expense => {
    console.log("In App.js")
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
     </div>
  );
}

export default App;
