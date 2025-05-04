import React from 'react';
import Filter from '../Filter/Filter';
import './App.css';
import '../../styles/reset.css';
import '../../styles/common.css';

const UsersApp = () => {
  return (
    <section className="appSection">
      <h2 className="appTitle">Directory of Users</h2>
      <Filter />
    </section>
  );
};

export default UsersApp;

