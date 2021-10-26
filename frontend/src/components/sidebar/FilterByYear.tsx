import { FunctionComponent, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";

export const FilterByYear: FunctionComponent = () => {
  const [startYear, setStartYear] = useState<number>(0);
  const [endYear, setEndYear] = useState<number>(new Date().getFullYear());

  function convertUnixDateToDate(unixNumber: number) {
    const date = new Date(unixNumber * 1000);
    //console.log(date.getFullYear());
    return date;
  }

  function convertDateToUnixDate(date: Date) {
    const unixTimeStamp = date.getTime() / 1000;
    return unixTimeStamp;
  }
  
  const FilterButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#cccccc',
      color:'#000'
    },
  }));

  console.log(convertUnixDateToDate(1551830400));
  console.log(convertDateToUnixDate(new Date(1551830400)));
  return (
    <div>
      <Form>
        <Form.Group as={Col} controlId="form-signup-first-name">
          <Form.Label>Start year: </Form.Label>
          <Form.Control
            autoFocus
            type="number"
            pattern="^[12][0-9]{3}$"
            minLength={4}
            placeholder="ex. 2000"
            onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="form-signup-last-name">
          <Form.Label>End year: </Form.Label>
          <Form.Control
            type="number"
            pattern="^[12][0-9]{3}$"
            minLength={4}
            placeholder="ex. 2020"
            onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Filter
        </Button>
      </Form>
    </div>
  );
};
