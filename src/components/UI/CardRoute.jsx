import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

export default function CardRoute({ user, route }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={route.img} />
      <Card.Body>
        <Card.Title>{route.name}</Card.Title>
        <Card.Text>{route.location}</Card.Text>
        <Card.Text>дистанция {route.distance} км</Card.Text>
        <div className="d-flex justify-content-between">
          <Button href={`/route/${route.id}`} variant="secondary">
            Подробнее
          </Button>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">уд.</Button>
            <Button variant="secondary">ред.</Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
