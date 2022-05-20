import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {Container} from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Container>
        <Calendar onChange={onChange} value={value} />
      </Container>
    </div>
  );
};

export default CalendarComponent;