import { Card } from "react-bootstrap";
import ActionButton from "../ActionButton/ActionButton";
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
  cancelHandler
}) => {
  return (
    <>
      <Card
        key={index}
        style={{
          backgroundColor: item.backgroundColor
        }}
      >
        <Card.Body>
          {editIndex !== index ? (
            <>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-muted">{item.description}</Card.Text>

              <div className="d-flex gap-2">
                <ActionButton
                  variant="secondary"
                  onClick={() => editHandler(index)}
                  size="sm"
                  btnName="Edit"
                />
                <ActionButton
                  variant="danger"
                  onClick={() => deleteHandler(index)}
                  size="sm"
                  btnName="Delete"
                />
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
              />
              <div className="d-flex gap-2 mt-2">
                <ActionButton
                  variant="success"
                  onClick={saveHandler}
                  size="sm"
                  btnName="Save"
                />
                <ActionButton
                  variant="secondary"
                  onClick={cancelHandler}
                  size="sm"
                  btnName="Cancel"
                />
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteCard;
