import { FunctionComponent } from "react";
import { Form, Button } from "react-bootstrap";

export interface FilterByGenreProps {
  genres: string[];
}

export const FilterByGenre: FunctionComponent<FilterByGenreProps> = ({
  genres,
}: FilterByGenreProps) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Action" />
          <Form.Check type="checkbox" label="Horror" />
          <Form.Check type="checkbox" label="Thriller" />
          <Form.Check type="checkbox" label="Comdey" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Filter
        </Button>
      </Form>
    </div>
  );
};
