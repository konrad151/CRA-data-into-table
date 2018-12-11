import React, { Component } from 'react';
import axios from 'axios';
import Table from '../components/Table/Table';
import '../bootstrap/css/bootstrap.min.css';
import styles from './App.module.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      workers: []
    }
  }

  componentDidMount() {
    this.getWorkers();
  }

  async getWorkers() {
      try {
          const res = await axios(`http://localhost:5000/workers`)
          this.setState({workers: res.data});
      } catch (error) {
          console.log(error);
      }
  }

  render() {
    return (
      <div className={styles.app}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Table workers={this.state.workers}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
