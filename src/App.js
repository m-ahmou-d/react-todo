import React from 'react';

const todoList = [
  {
    itemID: 1,
    title: 'Complete Assignment',
    type: 'School Work'
  },
  {
    itemID: 2,
    title: 'Go to the Gym',
    type: 'Personal'
  },
  {
    iitemID: 3,
    title: 'Work 10 Hours',
    type: 'Work'
  },
  {
    itemID: 4,
    title: 'Do Laundry',
    type: 'Personal'
  },
  {
    itemID: 5,
    title: 'Groceries',
    type: 'Errands'
  },
  {
    itemID: 6,
    title: 'Get an Oil Change',
    type: 'Errands'
  },
]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>{todoList.map(function(item) {
        return <li key="itemID">{item.itemID + ': ' + item.title + ' - ' + item.type}</li>
      })}
      </ul>
    </div>
  );
}

export default App;
