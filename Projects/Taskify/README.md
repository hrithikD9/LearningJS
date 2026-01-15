# Taskify -  Task Management Board

## 📋 Project Overview

**Taskify** is a modern, drag-and-drop board application built with vanilla JavaScript, HTML, and CSS. It provides an intuitive interface for managing tasks across three workflow stages: **To Do**, **In Progress**, and **Done**. The application features persistent data storage using browser's localStorage and a personalized user experience.

---

## 🎯 Key Features

- **User Personalization**: Prompts for username on first visit and displays it in the navigation bar
- **Add New Tasks**: Create tasks with title and description via a modal dialog
- **Drag-and-Drop Functionality**: Move tasks between columns by dragging and dropping
- **Task Deletion**: Remove unwanted tasks with a delete button
- **Persistent Storage**: All tasks are automatically saved to localStorage
- **Task Count**: Real-time display of task count in each column
- **Visual Feedback**: Hover effects when dragging tasks over columns
- **Responsive Design**: Clean, dark-themed UI with modern styling

---

## 🏗️ Project Structure

```
Taskify/
│
├── index.html          # Main HTML structure
├── script.js           # Application logic and functionality
├── style.css           # Styling and layout
└── README.md           # Project documentation
```

---

## 🔧 Technical Implementation

### **1. HTML Structure** ([index.html](index.html))

The application follows a semantic HTML structure:

- **Navigation Bar**: Contains the app logo, username display, and "Add New Task" button
- **Board Section**: Three task columns (To Do, In Progress, Done) with headings and task count
- **Modal Dialog**: Hidden by default, appears when adding new tasks with input fields for title and description

```html
<nav>                          <!-- Top navigation -->
<section class="board">        <!-- Kanban board with 3 columns -->
<div class="modal">            <!-- Task creation modal -->
```

### **2. JavaScript Logic** ([script.js](script.js))

#### **Core Components:**

##### **A. User Management**
```javascript
function checkUserName()
```
- Runs on page load (`onload` event)
- Checks localStorage for saved username
- Prompts user to enter name if not found
- Stores and displays username

##### **B. Task Management**
```javascript
function addTask(title, desc, column)
```
- Creates a new task element (div) with provided title and description
- Makes the task draggable by setting `draggable="true"`
- Adds a delete button with event listener
- Attaches drag event listener to track which task is being dragged
- Appends task to specified column

##### **C. Data Persistence**
```javascript
function updateTaskCount()
```
- Iterates through all three columns
- Collects task data (title and description) from each column
- Creates a data structure: `{ todo: [...], progress: [...], done: [...] }`
- Saves to localStorage as JSON string
- Updates the visual task count in each column header

##### **D. Data Restoration**
```javascript
if (localStorage.getItem("tasks")) { ... }
```
- Runs on page load
- Retrieves saved tasks from localStorage
- Parses JSON data
- Recreates tasks in their respective columns
- Updates task counts

##### **E. Drag-and-Drop System**

**Drag Events:**
```javascript
div.addEventListener("drag", (e) => {
  dropTask = div;  // Store reference to dragged task
});
```

**Drop Zone Events:**
```javascript
function addDragEventColumn(column)
```
- **dragenter**: Adds visual feedback (hover effect)
- **dragleave**: Removes hover effect when drag exits
- **dragover**: Prevents default to allow dropping
- **drop**: Appends dragged task to new column and updates data

##### **F. Modal Management**
```javascript
toggleModalButton.addEventListener("click", ...)
modalBG.addEventListener("click", ...)
addTaskButton.addEventListener("click", ...)
```
- Opens modal when "Add New Task" is clicked
- Closes modal when background is clicked
- Creates new task and closes modal when "Add Task" is clicked
- Clears input fields after task creation

---

### **3. CSS Styling** ([style.css](style.css))

#### **Design System:**

##### **CSS Variables (Custom Properties):**
```css
:root {
  --bg-color: #000000;              /* Main background */
  --bg-task-color: #2a2a2a;         /* Task card background */
  --bg-button-color: #1a1a1a;       /* Column background */
  --delete-color: #ff4d4d;          /* Delete button */
  --primary-text-color: #f4f4f4;    /* Text color */
  --bg-btn-done: #008000;           /* Add task button */
}
```

##### **Key Styling Features:**

1. **Flexbox Layout**: 
   - Columns use `flex-grow: 1` for equal distribution
   - `flex-direction: column` for vertical task stacking

2. **Drag Feedback**:
   ```css
   .task-column.hover-over {
     border: 2px dashed var(--primary-text-color);
     scale: 1.05;
   }
   ```

3. **Modal Overlay**:
   - Fixed positioning with backdrop blur
   - Toggle visibility with `.active` class

4. **Responsive Spacing**:
   - CSS variables for consistent padding/margins
   - Gap property for spacing between elements

---

## 🔄 Application Workflow

### **User Journey:**

```
1. Page Load
   ↓
2. Check Username → Prompt if not exists → Store & Display
   ↓
3. Load Saved Tasks from localStorage
   ↓
4. Render Tasks in Respective Columns
   ↓
5. User Interactions:
   │
   ├── Add New Task
   │   ├── Click "Add New Task" button
   │   ├── Fill modal form (title & description)
   │   ├── Click "Add Task"
   │   └── Task appears in "To Do" column
   │
   ├── Move Task
   │   ├── Drag task from any column
   │   ├── Drop in target column
   │   └── Task moves & data updates in localStorage
   │
   └── Delete Task
       ├── Click "Delete" button on task
       └── Task removed & data updates in localStorage
```

---

## 💾 Data Structure

### **localStorage Keys:**

1. **`username`** (String): Stores the user's name
   ```javascript
   "John Doe"
   ```

2. **`tasks`** (JSON String): Stores all tasks organized by column
   ```javascript
   {
     "todo": [
       { "title": "Task 1", "desc": "Description 1" },
       { "title": "Task 2", "desc": "Description 2" }
     ],
     "progress": [
       { "title": "Task 3", "desc": "Description 3" }
     ],
     "done": [
       { "title": "Task 4", "desc": "Description 4" }
     ]
   }
   ```

---

## 🎨 UI/UX Features

### **Visual Elements:**

- **Dark Theme**: Modern black background with gray accents
- **Color Coding**:
  - Red (#ff4d4d) for delete actions
  - Green (#008000) for positive actions (Add Task)
  - Gray tones for neutral elements

### **Interactions:**

- **Cursor Changes**: `cursor: grab` on tasks, `cursor: pointer` on buttons
- **Smooth Transitions**: Cubic bezier easing for smooth animations
- **Visual Feedback**: Scale and border effects on drag-over

### **Accessibility:**

- Semantic HTML tags (`<nav>`, `<section>`, `<main>`)
- Proper contrast ratios for text readability
- Clear button labels and placeholder text

---

## 🚀 How to Use

### **Setup:**
1. Open [index.html](index.html) in a web browser
2. Enter your name when prompted (stored for future visits)

### **Adding Tasks:**
1. Click **"Add New Task"** button in navigation
2. Enter task title and description in modal
3. Click **"Add Task"** to create
4. Task appears in "To Do" column

### **Managing Tasks:**
1. **Move Tasks**: Click and drag tasks to different columns
2. **Delete Tasks**: Click the "Delete" button on any task
3. **Track Progress**: View task counts in column headers

### **Data Persistence:**
- All tasks are automatically saved
- Close and reopen the browser to see your tasks persist
- Clear browser data to reset the application

---

## 🔍 Code Highlights

### **Key Variables:**

```javascript
const allCol = [todo, progress, done];  // Column references
let dropTask = null;                     // Currently dragged task
let taskData = {};                       // Task data structure
```

### **Event Listeners Summary:**

| Element | Event | Action |
|---------|-------|--------|
| Task | `drag` | Store dragged task reference |
| Column | `dragenter` | Add hover effect |
| Column | `dragleave` | Remove hover effect |
| Column | `dragover` | Prevent default (allow drop) |
| Column | `drop` | Move task & update data |
| Delete Button | `click` | Remove task & update data |
| Toggle Modal Button | `click` | Show modal |
| Modal Background | `click` | Hide modal |
| Add Task Button | `click` | Create task & hide modal |

---

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties and flexbox
- **Vanilla JavaScript**: DOM manipulation and event handling
- **localStorage API**: Client-side data persistence
- **Drag and Drop API**: Native HTML5 drag-and-drop functionality

---

## 📝 Future Enhancement Ideas

- [ ] Edit existing tasks
- [ ] Task priority levels (High, Medium, Low)
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Search and filter functionality
- [ ] Dark/Light theme toggle
- [ ] Export tasks to JSON/CSV
- [ ] Keyboard shortcuts
- [ ] Task comments/notes
- [ ] Multiple boards support
- [ ] Animations on task movement
- [ ] Mobile-responsive improvements

---

## 🐛 Known Limitations

- Data is stored locally (not synced across devices)
- No data backup mechanism
- Limited to three fixed columns
- No user authentication
- Tasks lost if localStorage is cleared

---

## 👨‍💻 Learning Outcomes

This project demonstrates:
- DOM manipulation and traversal
- Event handling (click, drag, drop)
- Browser storage APIs (localStorage)
- JSON data serialization
- CSS custom properties and modern layouts
- Modal/dialog patterns
- State management in vanilla JavaScript