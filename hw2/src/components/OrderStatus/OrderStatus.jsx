import React from 'react';

const OrderStatus = ({ orderId, status }) => {
    return <p>Order #{orderId}: {status}</p>;
};

export default OrderStatus;