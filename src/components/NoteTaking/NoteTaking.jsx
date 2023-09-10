import { Button, Container, Spinner } from "react-bootstrap/";
import { useEffect, useState } from "react";
import InputFields from "../InputFields/InputFields";
import randomColor from "randomcolor";
import NoteCard from "../NoteCard/NoteCard";
import { auth, db } from "../../firebase/firebase";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const NoteTaking = () => {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const resetItem = () => {
    setEditIndex(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const keyDownHandler = (event, action) => {
    if (event.key === "Enter") {
      event.preventDefault();
      action();
    }
  };

  const getAllNotes = async () => {
    //update data in firestore
    const currentUserQuery = query(
      collection(db, "notes"),
      where("userId", "==", auth.currentUser.uid)
    );

    try {
      const querySnapshot = await getDocs(currentUserQuery);
      let notesArray = [];

      querySnapshot.forEach((doc) => {
        notesArray.push({ ...doc.data(), id: doc.id });
      });

      //session storage
      sessionStorage.setItem("noteData", JSON.stringify(notesArray));

      //update data locally
      setList(notesArray);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  /* */

  const handleAddBtn = async () => {
    if (title.trim() !== "" || description.trim() !== "") {
      const newItem = {
        title: title,
        description: description,
        createdAt: new Date().toLocaleString("en-GB", { hour12: true }),
        backgroundColor: randomColor(),
        userId: auth.currentUser.uid
      };

      try {
        await addDoc(collection(db, "notes"), newItem);
        await getAllNotes();

        setTitle("");
        setDescription("");
      } catch (error) {
        toast.error("An error occurred while creating Note. Please try again.");
      }
    }
  };

  const editHandler = (index) => {
    setEditIndex(index);
    const updateItem = list[index];
    setEditedTitle(updateItem.title);
    setEditedDescription(updateItem.description);
  };

  const saveHandler = async () => {
    if (editIndex === null || editIndex < 0 || editIndex >= list.length) {
      toast.error("Invalid edit operation. Please try again.");
      return;
    }

    try {
      const noteId = list[editIndex].id;
      const notesRef = doc(db, "notes", noteId);
      if (!noteId) {
        toast.error("An error occurred while saving. Please try again.");
        return;
      }

      await updateDoc(notesRef, {
        title: editedTitle,
        description: editedDescription,
        backgroundColor: list[editIndex].backgroundColor,
        createdAt: new Date().toLocaleString("en-GB", { hour12: true })
      });

      const newItem = [...list];
      newItem[editIndex] = {
        title: editedTitle,
        description: editedDescription,
        createdAt: new Date().toLocaleString("en-GB", { hour12: true }),
        backgroundColor: list[editIndex].backgroundColor,
        id: noteId
      };
      setList(newItem);
      resetItem();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const cancelHandler = () => {
    resetItem();
  };

  const deleteHandler = async (index) => {
    if (index < 0 || index >= list.length) {
      toast.error("Invalid delete operation. Please try again.");
    }
    try {
      const noteRef = doc(db, "notes", list[index].id);
      await deleteDoc(noteRef);

      const newItem = [...list];
      newItem.splice(index, 1);
      setList(newItem);
    } catch (error) {
      toast.error("An error occurred while deleting. Please try again.");
    }
  };

  const cardBgHandler = (index) => {
    const updatedList = [...list];
    updatedList[index].backgroundColor = randomColor();
    setList(updatedList);
  };

  const loadUsersData = async () => {
    if (!auth.currentUser) {
      setIsLoading(false);
      return;
    }
    getAllNotes();
  };

  useEffect(() => {
    const storedNote = sessionStorage.getItem("noteData");

    if (storedNote) {
      const parseNoteData = JSON.parse(storedNote);
      setList(parseNoteData);
      setIsLoading(false);
    } else {
      loadUsersData();
    }
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate(routes.LOGIN);
    }
  });

  return (
    <>
      <Container className="mt-4 w-50">
        <InputFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          rows={3}
          keyDownHandler={(e) => keyDownHandler(e, handleAddBtn)}
        />
        <div className="d-flex justify-content-end mt-3">
          <Button variant="primary" onClick={handleAddBtn}>
            New Note
          </Button>
        </div>
      </Container>

      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner
            animation="border"
            variant="dark"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      ) : !list.length ? (
        <div className="mt-5">
          <h3 className="text-center display-2 text-dark">
            Oops! Your Notes are Empty
          </h3>
        </div>
      ) : (
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
                onSaveDisabled={!editedTitle}
                cardBgHandler={cardBgHandler}
                keyDownHandler={(e) => keyDownHandler(e, saveHandler)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default NoteTaking;
