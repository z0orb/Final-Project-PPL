import React, { useState, useEffect } from "react";

const Notepad = () => {
  const [note, setNote] = useState(""); // Current note content
  const [notes, setNotes] = useState(() => {
    // Initialize from localStorage or as an empty array
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [selectedNote, setSelectedNote] = useState(null); // Currently selected note
  const [showSaveModal, setShowSaveModal] = useState(false); // Save modal visibility
  const [showRenameModal, setShowRenameModal] = useState(false); // Rename modal visibility
  const [modalInput, setModalInput] = useState(""); // Input field for modals

  // Save notes to localStorage whenever notes array updates
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    setShowSaveModal(true);
    setModalInput(""); // Clear modal input
  };

  const confirmSaveNote = () => {
    if (!modalInput.trim()) return;

    const newNote = { id: Date.now(), name: modalInput, content: note };
    setNotes([...notes, newNote]);
    setNote(""); // Clear the editor
    setShowSaveModal(false);
  };

  const loadNote = (noteId) => {
    const foundNote = notes.find((n) => n.id === noteId);
    if (foundNote) {
      setSelectedNote(foundNote.id);
      setNote(foundNote.content);
    }
  };

  const renameNote = () => {
    if (!selectedNote) return;
    const currentNote = notes.find((n) => n.id === selectedNote);
    if (currentNote) {
      setModalInput(currentNote.name); // Pre-fill modal with current note name
      setShowRenameModal(true);
    }
  };

  const confirmRenameNote = () => {
    if (!modalInput.trim()) return;

    const updatedNotes = notes.map((n) =>
      n.id === selectedNote ? { ...n, name: modalInput } : n
    );
    setNotes(updatedNotes);
    setShowRenameModal(false);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((n) => n.id !== noteId);
    setNotes(updatedNotes);

    if (selectedNote === noteId) {
      setSelectedNote(null);
      setNote("");
    }
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[600px] rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Notepad</h1>
      <textarea
        className="border-2 border-gray-300 w-full h-96 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={saveNote}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Save Note
        </button>
        {selectedNote && (
          <button
            onClick={renameNote}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Rename Note
          </button>
        )}
      </div>

      {/* List of Saved Notes */}
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Saved Notes</h2>
        {notes.length > 0 ? (
          notes.map((n) => (
            <div
              key={n.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-2"
            >
              <div>
                <h3
                  className="font-medium text-gray-800 cursor-pointer hover:underline"
                  onClick={() => loadNote(n.id)}
                >
                  {n.name}
                </h3>
                {selectedNote === n.id && <span className="text-sm text-gray-500">(Currently Loaded)</span>}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => deleteNote(n.id)}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved notes yet.</p>
        )}
      </div>

      {/* Save Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Save Note</h3>
            <input
              type="text"
              className="border-2 border-gray-300 w-full p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter note name..."
              value={modalInput}
              onChange={(e) => setModalInput(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowSaveModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmSaveNote}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rename Modal */}
      {showRenameModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Rename Note</h3>
            <input
              type="text"
              className="border-2 border-gray-300 w-full p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter new note name..."
              value={modalInput}
              onChange={(e) => setModalInput(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowRenameModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmRenameNote}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition"
              >
                Rename
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notepad;
