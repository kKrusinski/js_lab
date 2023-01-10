let notes = [];
let currentEditingNote = null;

function createNote(title, content, color) {
    const note = {
        title: title,
        content: content,
        color: color,
        pin: false,
        createdAt: new Date()
    };
    localStorage.setItem(note.createdAt.toString(), JSON.stringify(note));
    return note;
}

function getNotes() {
    notes = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== "loglevel:webpack-dev-server") {
            const note = JSON.parse(localStorage.getItem(key));
            notes.push(note);
        }
    }
    return notes.sort((a, b) => b.pin - a.pin)
}

function renderNotes() {
  notes = getNotes();
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
  for (const note of notes) {
      const noteElem = document.createElement("div");
      noteElem.classList.add("note");
      noteElem.style.backgroundColor = note.color;
      if (!currentEditingNote && note.pin) {
          noteElem.style.border = "solid 2px #000";
          noteElem.style.zIndex = 1;
      }
      noteElem.innerHTML = `<h2>${note.title}</h2><p>${note.content}</p>`;
      const editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", function() {
          currentEditingNote = note;
          document.getElementById("edit-note-title").value = note.title;
          document.getElementById("edit-note-content").value = note.content;
          document.getElementById("edit-note-container").style.display = "block";
      });
      noteElem.appendChild(editButton);
      const pinButton = document.createElement("button");
      pinButton.innerHTML = "Pin/Unpin";
      pinButton.addEventListener("click", function() {
          note.pin = !note.pin;
          localStorage.setItem(note.createdAt.toString(), JSON.stringify(note));
          renderNotes();
      });
      noteElem.appendChild(pinButton);
      noteList.appendChild(noteElem);
  }
}