import Container from "react-bootstrap/Container";
import { useState } from "react";
import InputFields from "../InputFields/InputFields";
import ActionButton from "../ActionButton/ActionButton";
import randomColor from "randomcolor";
import NoteCard from "../NoteCard/NoteCard";

const NoteTaking = () => {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const resetItem = () => {
    setEditIndex(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const handleAddBtn = () => {
    if (title.trim() !== "") {
      const newItem = {
        title: title,
        description: description,
        backgroundColor: randomColor()
      };
      setList([...list, newItem]);
    }
    setTitle("");
    setDescription("");
  };

  const editHandler = (index) => {
    setEditIndex(index);
    const updateItem = list[index];
    setEditedTitle(updateItem.title);
    setEditedDescription(updateItem.description);
  };

  const saveHandler = () => {
    const newItem = [...list];
    newItem[editIndex] = {
      title: editedTitle,
      description: editedDescription,
      backgroundColor: randomColor()
    };
    setList(newItem);

    resetItem();
  };

  const cancelHandler = () => {
    resetItem();
  };

  const deleteHandler = (index) => {
    const newItem = [...list];
    newItem.splice(index, 1);
    setList(newItem);
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddBtn();
    }
  };

  return (
    <>
      <Container className="mt-4 w-50">
        <InputFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          rows={3}
          keyDownHandler={keyDownHandler}
        />
        <div className="d-flex justify-content-end mt-3">
          <ActionButton
            variant="primary"
            onClick={handleAddBtn}
            btnName="New Note"
          />
        </div>
      </Container>

      {list.length > 0 ? (
        <div className="container d-flex flex-row flex-wrap gap-4 mt-4">
          {list.map((item, index) => {
            return (
              <NoteCard
                index={index}
                item={item}
                editIndex={editIndex}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                editedTitle={editedTitle}
                setEditedTitle={setEditedTitle}
                editedDescription={editedDescription}
                setEditedDescription={setEditedDescription}
                saveHandler={saveHandler}
                cancelHandler={cancelHandler}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-5">
          <h3 className="text-center display-2 text-dark">
            Oops! Your Notes are Empty
          </h3>
        </div>
      )}
    </>
  );
};

export default NoteTaking;
