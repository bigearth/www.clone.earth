
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ExtruderAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class ExtruderAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h2>Extrude Assembly</h2>
            <h3>Step 1 Gather materials</h3>
            <h4>Tools</h4>
            <ul>
              <li>2.5, 2 and 1.5 mm Hex key</li>
              <li>Needle-nose pliers</li>
            </ul>
            <h4>3D printed parts</h4>
            <ul>
              <li>Cover x1</li>
              <li>Body x1</li>
              <li>Idler x1</li>
              <li>Fan nozzle x1</li>
              <li>Shaft x1</li>
            </ul>
            <h4>Hardware</h4>
            <ul>
              <li>
                Nuts &amp; Bolts
                <ul>
                  <li>M3x18 screw x6</li>
                  <li>M3x20 screw x3</li>
                  <li>M3x25 screw x1</li>
                  <li>M3x30 screw x3</li>
                  <li>M3x40 screw x3</li>
                  <li>M3 washer x4</li>
                  <li>M3 nut x4</li>
                  <li>M3 square nut x4</li>
                  <li>Pulley x1</li>
                  <li>bearing x1</li>
                  <li>Extruder spring x2</li>
                  <li>Wire wrap x1</li>
                </ul>
              </li>
              <li>
                Electronics
                <ul>
                  <li>Extruder x1</li>
                  <li>Stepper motor x1</li>
                  <li>Proximity probe x1</li>
                  <li>Fan x1</li>
                  <li>Print fan x1</li>
                </ul>
              </li>
              <li>
                Miscellaneous
                <ul>
                  <li>Zip tie 20 cm x1</li>
                  <li>Zip tie 10 cm x3</li>
                  <li>Stepper Motor cable x1</li>
                  <li>Wire Wrap x1</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/GnFlR5p.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 2 Prepare left extruder body</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3 nut x2</li>
              <li>M3 square nut x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Place the M3 nuts into the traps on the left side of the extruder body.</li>
              <li>Slide the M3 square nuts into the traps on the right side of the extruder body.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 3 Prepare extruder body</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Extruder x1</li>
              <li>Right Extruder body print x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Slide the extruder body on the nozzle.</li>
              <li>Push the nozzle all the way down and make sure that cables are on the side as shown in the picture.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/JddB436.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 4 Prepare extruder Cover</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3 nuts x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Place the M3 nuts into the traps of the extruder cover.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 5 Placing the extruder cover</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3x18 screw x1</li>
              <li>M3x25 screw x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Using the 2.5mm Hex key tighten both screws to mount the extruder cover on the extruder body.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/CcFHZmX.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 6 Preparing the extruder motor</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Stepper motor x1</li>
              <li>Pulley x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Press the pulley on the motor.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 7 Mount the motor and idler</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3x30 screw x2</li>
              <li>Prepared motor x1</li>
              <li>Idler print x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Mount the motor on the the extruder body as shown in the picture, double check proper orientation of the motor cables.</li>
              <li>Tighten the motor screws gently.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/37I2DKy.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 8 Tightening the pulley</h3>
            <h4>Hardware</h4>
            <ul>
              <li>1.5mm Hex key</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Using the 1.5mm Hex key tighten the pulley.</li>
              <li>Make sure that the part with smaller diameter is perfectly aligned with the nozzle entrance.</li>
              <li>Use a piece of filament to align the pulley with the openings for the filament (see the picture).</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/eOATJMp.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 9 Prepare the extruder idler</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3 square nut x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Place the M3 square nuts (2 pcs) into the traps of the extruder body.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 10 Prepare shaft w/ bearing</h3>
            <h4>Hardware</h4>
            <ul>
              <li>shaft x1</li>
              <li>bearing x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Place the washers and bearing on the shaft as shown in the picture.</li>
              <li>Place the shaft with bearing into the idler.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 11 Prepare the extruder idler screws</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3x40 screw x2</li>
              <li>M3 washer x4</li>
              <li>Extruder spring x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Picture coming soon.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 12 placing the screws</h3>
            <h4>Hardware</h4>
            <ul>
              <li>2.5 mm Hex key</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Screw the extruder screws into the extruder body using the 2.5 mm Hex key.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 13 Preparing the print fan</h3>
            <h4>Hardware</h4>
            <ul>
              <li>2.5 mm Hex key</li>
              <li>Print fan x1</li>
              <li>M3x20 screw x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Screw the fan on to the extruder using the 2.5 mm Hex key</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/1Y2An6t.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 14 Prepare the fan nozzle</h3>
            <h4>Hardware</h4>
            <ul>
              <li>2.5 mm Hex key</li>
              <li>Fan nozzle print x1</li>
              <li>M3x20 screw x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Tighten the fan nozzle using the 2.5 mm Hex key.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 15 Proximity probe preparation</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Proximity probe x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Remove a single nut from the probe.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 16 Probe and fan cable preparation</h3>
            <h4>Hardware</h4>
            <ul>
              <li></li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Guide both cables trough cable clip on the extruder body.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 17 Probe mounting</h3>
            <h4>Hardware</h4>
            <ul>
              <li></li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Mount probe in place.</li>
              <li>Secure probe with nut.</li>
              <li>Exact position of probe will be adjusted later.</li>
              <li>Note the loop on cable from probe, it&rsquo;s necessary to do it like that.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/dcHCYPb.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 18 Mounting the fan</h3>
            <h4>Hardware</h4>
            <ul>
              <li>2.5 mm Hex key</li>
              <li>M3x18 screw x4</li>
              <li>Fan x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Guide cables from the extruder motor via slot in the extruder body, put the fan in place.</li>
              <li>Mount the fan to the extruder body using the 2.5mm Hex key.</li>
              <li>Tighten fan screws gently using the 2.5 mm Hex key.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/TL1kJRp.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 19 Preparing for extruder mounting on X axis</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3x40 screw x1</li>
              <li>M3x30 screw x1</li>
              <li>M3x18 screw x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li></li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 20 Extruder cables preparation</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Guide cables from the extruder between chrome rods.</li>
              <li>Picture Coming soon</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li></li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 21 Arranging extruder cables</h3>
            <h4>Hardware</h4>
            <ul>
              <li></li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Arrange cables from the extruder upper part neatly in extruder cable holders.</li>
              <li>Ensure the cables are placed in the channel behind left fan.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 22 Securing Extruder in place</h3>
            <h4>Hardware</h4>
            <ul>
              <li>2.5 mm Hex key</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Tighten the extruder in place using 2.5 mm Hex key.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 23 Cable Management Right Side</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Zip Tie</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Insert 20 cm ziptie in the right side of the X-carriage so that cables from the extruder motor and the fan are below ziptie and held in place.</li>
              <li>Double check the orientation of the ziptie.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 24 Cable Management Left Side</h3>
            <h4>Hardware</h4>
            <ul>
              <li></li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Once all cables are neatly arranged finalize it by tightening the ziptie and cutting off the excessive piece.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/wR2FYSC.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 25 Preparing the spiral wrap</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Wire wrap x1</li>
              <li>Zip Tie x3</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Take nylon with upper cables (both fans, motor, probe) and make 1 turn with spiral wrap around them, then add remaining cables and continue with wrapping.</li>
              <li>Use zipties and tighten the wrapped cables and spiral wrap.</li>
              <li>Use one piece at the beginning of the spiral wrap, second one just after join of all cables and third at the end.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>All Done!</h3>
            <p>Congratulations! Now on to the next step.</p>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://i.imgur.com/BOmItZ3.jpg' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(ExtruderAssembly);
