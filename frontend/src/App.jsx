import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

import Welcome from "./components/welcome.jsx";
import Welcome2 from "./components/welcome2.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Signup from "./components/authpage/Signup.jsx";
import Login from "./components/authpage/Login.jsx";
import Passreset from "./components/authpage/Passreset.jsx";
import Changepass from "./components/authpage/Changepass.jsx";
import AboutUs from "./components/aboutus.jsx";
import Contact from "./components/contact.jsx";
import PrivacyPolicy from "./components/privatepolicy.jsx";
import SidebarLeft from "./components/SidebarLeft.jsx";
import Feed from "./components/feed.jsx";
import RightSidebar from "./components/rightsidebar.jsx";
import Opportunities from "./components/opportunies.jsx";
import Frends from "./components/friends.jsx";
import Group from './components/Groups.jsx';
import Profile from './components/Profile.jsx';
import Discussion from './components/Discussion.jsx';
import Saved, { SavedMessagesProvider } from './components/Saved.jsx';
import Events from './components/Events.jsx';
import Studywin from './components/Studywin.jsx';
import Tutorials from './components/Tutorials.jsx';

// Dashboard layout
const DashboardLayout = ({ user }) => (
  <div className="flex min-h-screen">
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block md:w-64">
      <SidebarLeft user={user} />
    </aside>
    <main className="flex-1 p-4 overflow-y-auto">
      <Feed />
      <div className="mt-8">
        <Outlet />
      </div>
    </main>
    <aside className="hidden lg:block w-64 bg-white border-l border-gray-200">
      <RightSidebar />
    </aside>
  </div>
);

// Public welcome layout
const WelcomeLayout = () => (
  <>
    <Welcome />
    <section id="features">
      <Welcome2 />
    </section>
  </>
);

// App layout
function AppLayout({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const hideFullLayoutPaths = [
    "/sign-in",
    "/sign-up",
    "/Signin",
    "/Signup",
    "/Forgotpassword",
    "/changepassword",
  ];
  const shouldHideFullLayout = hideFullLayoutPaths.includes(location.pathname);

  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "/avatar.jpg",
  });

  const showFooter = !isLoggedIn && !shouldHideFullLayout;

  return (
    <>
      {!shouldHideFullLayout && <Header user={user} />}

      <Routes>
        {/* Public pages */}
        <Route
          path="/"
          element={!isLoggedIn ? <WelcomeLayout /> : <Navigate to="/dashboard" />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/opportunites" element={<Opportunities />} />
        <Route path="/frends" element={<Frends />} />
        <Route path="/groups" element={<Group />} />
        
        {/* Main app pages */}
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Discussion" element={<Discussion/>}/>
        <Route path="/Saved" element={<SavedMessagesProvider><Saved/></SavedMessagesProvider>}/>
        <Route path="/Studywin" element={<Studywin/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>

        {/* Auth pages - supporting both route formats */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/sign-in" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/Forgotpassword" element={<Passreset />} />
        <Route path="/changepassword" element={<Changepass />} />

        {/* Dashboard - protected */}
        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardLayout user={user} /> : <Navigate to="/sign-in" />}
        >
          <Route />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

// Main App
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
}