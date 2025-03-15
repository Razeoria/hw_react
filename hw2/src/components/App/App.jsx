import React from 'react';
import Greeting from '../Greeting/Greeting';
import ShoppingList from '../ShoppingList/ShoppingList';
import OrderStatus from '../OrderStatus/OrderStatus';

function App() {
  const shoppingItems = ["Kartoffeln", "Tomaten", "Gurken"];
  const orders = [
    { orderId: 6, status: "Unterwegs" },
    { orderId: 12, status: "Verarbeitet" },
  ];

return (
  <div>
    <Greeting name="Valy" />
    <ShoppingList items={shoppingItems} />
    {orders.map(({ orderId, status }) => <OrderStatus key={orderId} orderId={orderId} status={status} />)}
  </div>
)
}

export default App