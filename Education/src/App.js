import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import LoginForm from './pages/login/Login';
import StudentDashboard from './pages/Student/StudentDashboard';
import Profile from './pages/Student/Profile';
import ProfileEdit from './pages/Student/ProfileEdit';
import Offers from './pages/Student/Offers';
import Subjects from './pages/Student/Subjects';
import Help from './pages/Student/Help';
import SubjectDetails from './pages/Student/SubjectDetails';
import PeriodDetails from './pages/Student/PeriodDetails';
import LessonDetails from './pages/Student/LessonDetails';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminChangePassword from './pages/Admin/AdminChangePassword';
import AdminProfileEdit from './pages/Admin/AdminProfileEdit';
import AdminSubjects from './pages/Admin/AdminSubjects';
import AdminHelp from './pages/Admin/AdminHelp';
import AdminUsers from './pages/Admin/AdminUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboardstudent" element={<StudentDashboard />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile/edit" element={<ProfileEdit/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/subjects" element={<Subjects/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/subject/:subjectName" element={<SubjectDetails />} />
          <Route path="/subject/:subjectName/period/:periodNumber" element={<PeriodDetails />} />
          <Route path="/subject/:subjectName/period/:periodNumber/lesson/:lessonNumber" element={<LessonDetails />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/adminprofile/edit" element={<AdminProfileEdit />} /> {/* Add the edit profile route */}
          <Route path="/adminprofile/changepassword" element={<AdminChangePassword />} /> {/* Add the change password route */}
          <Route path="/adminsubjects" element={<AdminSubjects />} />
          <Route path="/adminhelp" element={<AdminHelp />} />
          <Route path="/adminusers" element={<AdminUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
