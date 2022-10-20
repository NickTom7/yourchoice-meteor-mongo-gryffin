import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Youtube, Tiktok, Envelope } from 'react-bootstrap-icons';

const BottomMenu = () => (
  <div id="bgcol">
    <footer className="footer mt-auto py-3">
      <Container>
        <Row id="line">
          <h5>ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON</h5>
        </Row>
      </Container>

      <div className="container" id="bottomMenu">
        <ul className="nav justify-content-center">
          <li className="p-3">
            GRYFFAM
            <div>Join the fam and stay up to date on all</div>
            <div>things Gryffin</div>
            <input type="text" placeholder="Enter your email" />
            <div className="btn btn-dark"><Envelope /></div>
            <hr />
            <div className="p-4"><Instagram /><Facebook /><Youtube /><Twitter /><Tiktok /></div>
          </li>

          <li className="p-3">
            <div>MERCH</div>
            <hr />
            Collections
            <div>Jerseys</div>
            <div>Shop All</div>
            <div>Gift Cards</div>
          </li>

          <li className="p-3">
            HELP
            <hr />
            <div>FAQs</div>
            <div>Control</div>
          </li>

          <li className="p-3">
            POLICIES
            <hr />
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Refund Policy</div>
            <div>Shipping Policy</div>

          </li>

        </ul>
      </div>

    </footer>
  </div>
);

export default BottomMenu;
