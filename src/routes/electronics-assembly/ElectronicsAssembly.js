
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ElectronicsAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class ElectronicsAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Electronics Assembly</h2>
              <p>Coming Soon</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(ElectronicsAssembly);
