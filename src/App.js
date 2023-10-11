import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Complete Assignment',
    type: 'School Work'
  },
  {
    id: 2,
    title: 'Go to the Gym',
    type: 'Personal'
  },
  {
    id: 3,
    title: 'Work 10 Hours',
    type: 'Work'
  },
  {
    id: 4,
    title: 'Do Laundry',
    type: 'Personal'
  },
  {
    id: 5,
    title: 'Groceries',
    type: 'Errands'
  },
  {
    id: 6,
    title: 'Get an Oil Change',
    type: 'Errands'
  },
]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>{todoList.map(function(item) {
        return <li>{item.id + ': ' + item.title + ' - ' + item.type}</li>
      })}
      </ul>
    </div>
  );
}

export default App;
