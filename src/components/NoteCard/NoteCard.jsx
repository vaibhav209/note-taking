import { Button, Card } from "react-bootstrap";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import InputFields from "../InputFields/InputFields";

const NoteCard = ({
  index,
  item,
  editIndex,
  editHandler,
  deleteHandler,
  editedTitle,
  setEditedTitle,
  editedDescription,
  setEditedDescription,
  saveHandler,
  cancelHandler,
  onSaveDisabled,
  cardBgHandler,
  keyDownHandler
}) => {
  return (
    <>
      <Card
        key={index}
        className="mb-2"
        style={{
          backgroundColor: item.backgroundColor,
          width: "20rem",
          height: index !== editIndex ? "100%" : ""
        }}
      >
        <Card.Body>
          {editIndex !== index ? (
            <>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-dark">{item.description}</Card.Text>
              <Card.Text className="text-muted">{item.createdAt}</Card.Text>

              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                  <Button
                    variant="outline-dark"
                    onClick={() => cardBgHandler(index)}
                    size="sm"
                  >
                    Card Theme
                  </Button>
                </div>

                <div className="d-flex justify-content-end gap-4">
                  <PencilSquare
                    onClick={() => editHandler(index)}
                    cursor="pointer"
                    size={24}
                  />

                  <Trash3
                    onClick={() => deleteHandler(index)}
                    cursor="pointer"
                    size={24}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <InputFields
                title={editedTitle}
                setTitle={setEditedTitle}
                description={editedDescription}
                setDescription={setEditedDescription}
                rows={2}
                keyDownHandler={keyDownHandler}
              />
              <div className="d-flex gap-2 mt-2">
                <Button
                  variant="success"
                  onClick={saveHandler}
                  size="sm"
                  disabled={onSaveDisabled}
                >
                  Save
                </Button>
                <Button variant="secondary" onClick={cancelHandler} size="sm">
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteCard;
