
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YAxisAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class YAxisAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Y Axis Assembly</h2>
              <h3>Step 1 Gather materials</h3>
              <h4>Tools</h4>
              <ul>
                <li>13/17mm spanners x2</li>
                <li>3.6mm flathead screwdriver x1</li>
                <li>Needle nose pliers x1</li>
                <li>2.5 and 1.5mm Allen key</li>
              </ul>
              <h4>3D printed parts</h4>
              <ul>
                <li>Y axis corners x4</li>
                <li>Y motor holder x1</li>
                <li>Y idler x1</li>
                <li>Y belt holder x1</li>
              </ul>
              <h4>Hardware</h4>
              <ul>
                <li>M10 threaded rod x2</li>
                <li>M8 threaded rod x4</li>
                <li>M10 Chrome rod x2</li>
                <li>M10 nuts x14</li>
                <li>M10 washers x12</li>
                <li>M8 nuts x22</li>
                <li>M8 washers x22</li>
                <li>Linear bearings x3</li>
                <li>Y axis carriage x1</li>
                <li>Y axis endstop x1</li>
                <li>Zip ties x4</li>
                <li>GT2 belt x1</li>
                <li>Bearing housing x1 </li>
                <li>M3 locknut x3</li>
                <li>M3 washer x2</li>
                <li>Nema 17 stepper motor x1</li>
                <li>GT2 pulley x1</li>
                <li>M3x25 screw x1</li>
                <li>M3x10 screw x2</li>
                <li>M3x16 screw x4</li>
              </ul>
              <img src='https://i.imgur.com/sasJiyT.jpg' />
              <hr />
              <h3>Step 2 Assemble the Y-axis rods</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M10 threaded rod x2</li>
                <li>M10 washers x12</li>
                <li>M10 nuts x14</li>
              </ul>
              <img src='https://i.imgur.com/Wdftzpu.jpg' />
              <ol>
                <li>Screw the nuts on and place washers and Y-corners on the threaded rod.</li>
                <li>Ensure 100mm distance between a washer after counter-nut and the Y-axis corner.</li>
                <li>The 2 nuts have to be tightened against each other (counter-nut).</li>
              </ol>
              <img src='https://i.imgur.com/75YHQ8L.jpg' />
              <hr />
              <h3>Step 3 Assemble the Y-axis stage rear</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M8 threaded rod x2</li>
                <li>M8 washers x8</li>
                <li>M8 nuts x4</li>
              </ul>
              <img src='https://i.imgur.com/FmUzImN.jpg' />
              <ol>
                <li>Screw the nuts and place washers and Y-motor-holder on threaded rod.</li>
                <li>Y-motor-mount should be somewhere in the middle of the threaded rod. The precise position doesn&rsquo;t matter at this time.</li>
                <li>Ensure the correct orientation of Y-motor-holder.</li>
              </ol>
              <img src='https://i.imgur.com/mpa5uom.jpg' />
              <hr />
              <h3>Step 4 Assemble the Y-axis stage front</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M8 threaded rod x2</li>
                <li>M8 washers x8</li>
                <li>M8 nuts x6</li>
              </ul>
              <img src='https://i.imgur.com/JH8kvCk.jpg' />
              <ol>
                <li>Screw the nuts and place washers and Y-idler on threaded rod.</li>
                <li>Y-idler should be somewhere in the middle of the threaded rod. The precise position doesn&rsquo;t matter at this time.</li>
              </ol>
              <img src='https://i.imgur.com/r5rBEJd.jpg' />
              <hr />
              <h3>Step 5 Fully assemble the Y-axis stage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M8 washers x8</li>
                <li>M8 nuts x8</li>
              </ul>
              <img src='https://i.imgur.com/M4d86WM.jpg' />
              <ol>
                <li>Insert Y-axis stage front and back into Y-axis side elements and lock it with washers and nuts.</li>
                <li>Ensure the correct placement. Y-axis rear stage has to be closer to the double-nuts.</li>
              </ol>
              <img src='https://i.imgur.com/Qz48Fyh.jpg' />
              <hr />
              <h3>Step 6 Prepare for the Y-axis stage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Aluminum Frame x1</li>
                <li>Y axis stage from previous steps</li>
              </ul>
              <img src='https://i.imgur.com/kCkUdcW.jpg' />
              <ol>
                <li>Insert the Y-axis stage into the frame as close to Y-corners as possible.</li>
                <li>Adjust and tighten the M8n nuts.</li>
                <li>Rotate the Y-axis stage and repeat.</li>
                <li>After adjusting, the Y-axis stage should cause minimum movement while inserted into the frame.</li>
                <li>Tighten the M8n nuts gently or you&squo;ll risk damaging the 3D printed parts.</li>
                <li>It is incredibly important that the axis is perfectly rectangular at this stage of construction, all rods need to be perfectly straight and level. If not, you&rsquo;ll have troubles calibrating later on.</li>
              </ol>
              <img src='https://i.imgur.com/aLTqj1G.jpg' />
              <hr />
              <h3>Step 7 Assemble the Y carriage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Y Carriage x1</li>
                <li>Zip ties x3</li>
                <li>Linear bearings x3</li>
              </ul>
              <img src='https://i.imgur.com/o6eUS80.jpg' />
              <ol>
                <li>Insert zipties into the Y-carriage as shown on the picture.</li>
                <li>Place the linear bearings in cutouts.</li>
                <li>On side with two bearings slide bearings to the center, towards each other as close as possible.</li>
              </ol>
              <img src='https://i.imgur.com/9qj4Q7P.jpg' />
              <hr />
              <h3>Step 8 Assemble the Y idler</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3x25 screw x1</li>
                <li>M3 washer x2</li>
                <li>bearing housing x1</li>
                <li>M3 lock nut x1</li>
              </ul>
              <img src='https://i.imgur.com/Rj9IsiB.jpg' />
              <ol>
                <li>To tighten the Y-idler, use the pliers and 2.5mm Allen key.</li>
                <li>Tighten the screw gently, just half turn max after the washers touch the 3D printed part.</li>
              </ol>
              <img src='https://i.imgur.com/sbJa9SN.jpg' />
              <hr />
              <h3>Y axis motor</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Stepper motor x1</li>
                <li>M3x10 screw x2</li>
              </ul>
              <img src='https://i.imgur.com/qseU1ax.jpg' />
              <ol>
                <li>Using the 2.5mm Allen key, secure the motor to the 3D printed part. Motor cables must be facing threaded rods.</li>
                <li>Tighten the motor gently to avoid damage to the 3D printed part.</li>
              </ol>
              <img src='https://i.imgur.com/LwkMjCD.jpg' />
              <hr />
              <h3>Y Endstop</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M2x12 screw x2</li>
                <li>Endstop x1</li>
              </ul>
              <img src='https://i.imgur.com/rlxargp.jpg' />
              <ol>
                <li>To tighten the Y-endstop use 1.5mm Allen key.</li>
              </ol>
              <img src='https://i.imgur.com/wRt33HE.jpg' />
              <hr />
              <h3>Y belt holder</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3x12 screw x2</li>
              </ul>
              <img src='https://i.imgur.com/3gOVgJQ.jpg' />
              <ol>
                <li>Place Y-belt holder on the Y-carriage.</li>
                <li>Be aware of the orientation of Y-belt holder (belt entry should face towards single bearing).</li>
              </ol>
              <img src='https://i.imgur.com/pTwerlu.jpg' />
              <hr />
              <h3>Y carriage rods</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Chrome rod x2</li>
              </ul>
              <img src='https://i.imgur.com/bBVvcti.jpg' />
              <ol>
                <li>Insert the 8mm smooth rods into the linear bearings on Y-carriage.</li>
              </ol>
              <img src='https://i.imgur.com/B7X9n2f.jpg' />
              <hr />
              <h3>Assemble the Y axis stage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Assembled y carriage</li>
                <li>Assembled y stage</li>
              </ul>
              <img src='https://i.imgur.com/3mQwKt2.jpg' />
              <ol>
                <li>Insert the assembled Y-carriage into the Y-axis stage.</li>
                <li>Insert zipties into holes in Y-corners.</li>
                <li>Using pliers, tighten the zipties as shown in the picture.</li>
              </ol>
              <img src='https://i.imgur.com/jZSNY4K.jpg' />
              <hr />
              <h3>Add Y motor pulley</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Assembled y motor</li>
                <li>GT2 pulley x1</li>
              </ul>
              <img src='https://i.imgur.com/WcPBlXx.jpg' />
              <ol>
                <li>Add pulley to motor shaft and tighten.</li>
              </ol>
              <img src='https://i.imgur.com/zzOmwY4.jpg' />
              <hr />
              <h3>Add belt to y axis</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Pulley timing belt x1</li>
              </ul>
              <ol>
                <li>Run around y idler.</li>
                <li>Run around y motor</li>
                <li>Loop around y carriage holder.</li>
              </ol>
              <p><img src='https://i.imgur.com/MOKcNa0.jpg' /></p>
              <p><img src='https://i.imgur.com/4QOUmRl.jpg' /></p>
              <p><img src='https://i.imgur.com/QUWvM1j.jpg' /></p>
              <hr />
              <h3>All Done!</h3>
              <img src='https://i.imgur.com/p5Pe9Pr.jpg' />
              <ul>
                <li>Congratulations! Now on to the next step.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(YAxisAssembly);
