import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './Sponsors.modules.css';

function Sponsors() {
  return (
   
    <CardGroup id="sponsors">
      <a href="https://www.knoxford.com/" target="_blank" rel="noopener noreferrer">
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor2.png")} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this 2023 Lakers sponsor</small>
        </Card.Footer>
      </Card>
      </a>
      <a href="https://www.nbl.com/" target="_blank" rel="noopener noreferrer">
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor3.png")} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this 2023 Lakers sponsor</small>
        </Card.Footer>
      </Card>
      </a>
      <a href="https://www.ringwoodmg.com.au/" target="_blank" rel="noopener noreferrer">
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor4.png")} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">lick to support this 2023 Lakers sponsor</small>
        </Card.Footer>
      </Card>
      </a>
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor2.png")} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this 2023 Lakers sponsor</small>
        </Card.Footer>
      </Card>      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor2.png")} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this 2023 Lakers sponsor</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Sponsors;