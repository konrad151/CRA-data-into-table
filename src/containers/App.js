import React, { Component } from 'react';
import Table from '../components/Table/Table';
import '../bootstrap/css/bootstrap.min.css';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Table/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
