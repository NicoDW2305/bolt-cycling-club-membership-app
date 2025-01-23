import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import MemberList from './components/MemberList';
    import MemberForm from './components/MemberForm';

    function App() {
      return (
        <div className="container">
          <h1>Cycling Club Membership</h1>
          <nav>
            <Link to="/">Members</Link> | <Link to="/add">Add Member</Link>
          </nav>
          <Routes>
            <Route path="/" element={<MemberList />} />
            <Route path="/add" element={<MemberForm />} />
            <Route path="/edit/:id" element={<MemberForm />} />
          </Routes>
        </div>
      );
    }

    export default App;
