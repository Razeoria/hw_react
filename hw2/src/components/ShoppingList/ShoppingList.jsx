import React from 'react';

const ShoppingList = ({ items }) => {
    
    return (
        <div>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Die Einkaufsliste ist leer.</p>
            )}
        </div>
    );
};

export default ShoppingList;