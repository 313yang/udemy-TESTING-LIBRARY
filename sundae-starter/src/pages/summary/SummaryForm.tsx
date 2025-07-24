import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const popover = (
  <Popover>
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  </Popover>
);
const checkboxLabel = (
  <div>
    I agree to the
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <strong style={{ color: 'blue' }}>terms and conditions</strong>
    </OverlayTrigger>
  </div>
);
const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button type="submit" disabled={!isChecked}>Confirm order</Button>
    </Form>
  );
};

export default SummaryForm;
