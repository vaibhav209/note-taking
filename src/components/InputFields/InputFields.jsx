import Form from "react-bootstrap/Form";

const InputFields = ({
  title,
  setTitle,
  description,
  setDescription,
  rows,
  keyDownHandler
}) => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={keyDownHandler}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Control
            as="textarea"
            placeholder="write description..."
            rows={rows}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default InputFields;
