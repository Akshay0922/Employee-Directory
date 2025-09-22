Employee Directory


A simple Employee Directory web app built with React, featuring:
    - Add / Edit / Delete employees
    - Search employees by name or department
    - Form validation
    - Toast notifications (success / error / info)
    - Data persistence using LocalStorage
    - Modular structure with reusable components


Features

    - Search Bar: Filter employees by name or department.
    - Employee Form: Controlled form for adding & editing employees.
    - Employee List: Displays all employees in a clean card layout.
    - Validation: Prevents invalid or duplicate entries.
    - Toast Notifications: Instant feedback for user actions.
    - LocalStorage Persistence: Data is saved even after refresh.


Tech Stack

    - Frontend: React (Hooks, Functional Components)
    - Styling: Custom CSS (no frameworks used)
    - State Management: React useState + useEffect
    - Notifications: react-toastify
    - Storage: Browser LocalStorage


Project Structure

src/
 ├─ assets/
 │   ├─ styles/          # CSS files for components & pages
 │   └─ images/          # Static images, logos etc.
 │
 ├─ components/          # Reusable UI components
 │   ├─ Avatar.jsx
 │   ├─ EmployeeCard.jsx
 │   ├─ EmployeeForm.jsx
 │   ├─ EmployeeList.jsx
 │   ├─ SearchBar.jsx
 │   ├─ Header.jsx
 │   └─ Footer.jsx
 │
 ├─ pages/               # Page-level components
 │   └─ EmployeeDirectory.jsx
 │
 ├─ services/            # LocalStorage CRUD logic
 │   └─ employeeService.js
 │
 ├─ utils/               # Helper functions (validation, etc.)
 │   └─ validations.js
 │
 ├─ App.jsx              # Root component
 ├─ main.jsx             # Entry point
 │
public/
 └─ favicon.png          # App favicon


Getting Started

    1. Clone repo
        git clone https://github.com/akshay0922/employee-directory.git
        cd employee-directory

    2. Install dependencies
        npm install

    3. Run app
        npm run dev


Learnings / MCA Edge

    - Component-based architecture in React
    - Controlled forms with validation
    - LocalStorage as a lightweight backend
    - Toast notifications for UX enhancement
    - Code modularity (services, components separation)


Future Enhancements

    - Connect with real backend API
    - Implement pagination / infinite scroll
    - Add role-based access (admin/user)
    - Export employee list as CSV/PDF


Author

Akshay – MCA Student, passionate about coding & learning new things.