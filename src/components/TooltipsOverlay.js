import {Popover} from 'react-bootstrap';

const TooltipOverlay = (props) => {
    <Popover id="popover-basic">
      <Popover.Header as="h3">{props.title}</Popover.Header>
      <Popover.Body>
        {props.text}
      </Popover.Body>
    </Popover>
};

export default TooltipOverlay;