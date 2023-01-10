// Funkcja tworzenia notatki
function createNote(title, content, color, pin) {
    const note = {
      title: title,
      content: content,
      color: color,
      pin: pin,
      createdAt: new Date()
    };
    localStorage.setItem(note.createdAt.toString(), JSON.stringify(note));
    return note;
  }
  
  // Funkcja renderowania notatek na stronie
  function renderNotes() {
    const notes = getNotes();
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";
    for (const note of notes) {
      const noteElem = document.createElement("div");
      noteElem.style.backgroundColor = note.color;
      noteElem.innerHTML = `<h2>${note.title}</h2><p>${note.content}</p>`;
      if (note.pin) {
        noteElem.style.order = "-1";
      }
      noteElem.addEventListener("click", function() {
        editNote(note);
      });
      noteList.appendChild(noteElem);
    }
  }
  
  // Funkcja pobierająca notatki z localStorage
  function getNotes() {
    const notes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const note = JSON.parse(localStorage.getItem(key));
      notes.push(note);
    }
    return notes;
  }
  
  // Funkcja edycji notatki
  function editNote(note) {
    const title = prompt("Enter new title:", note.title);
    const content = prompt("Enter new content:", note.content);
    const color = prompt("Enter new color:", note.color);
    note.title = title;
    note.content = content;
    note.color = color;
    localStorage.setItem(note.createdAt.toString(), JSON.stringify(note));
    renderNotes();
  }
  
  // Funkcja usuwająca wszystkie notatki z localStorage
  function clearNotes() {
    localStorage.clear();
    renderNotes();
  }
  
  const createButton = document.getElementById("create-button");
createButton.addEventListener("click", function() {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;
  const color = document.getElementById("note-color").value;
  createNote(title, content, color, false);
  renderNotes();
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearNotes);

renderNotes();