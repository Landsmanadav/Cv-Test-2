import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Dashboard from './comp/Dashboard';
import Team from './comp/Team';
import Header from './comp/Header';
const navigation = [
  { name: 'Dashboard', href: '', current: false },
  { name: 'Team', href: 'team', current: false },
]
function App() {
  // Nav Control
  const { pathname } = useLocation()
  let currentPage = pathname.slice(1)
  navigation.map(page => page.href == currentPage ? page.current = true : page.current = false)

  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:10005/')
      const data = await res.json()
      setUsers(data.users)
      setSelectedUser(data.users[0])
    })();
  }, [])

  const handleSelectedUser = (user) => {
    setSelectedUser(user)
  }


  return (
    <div className="App">
      <div className="header">
        <Header navigation={navigation} selectedUser={selectedUser} />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard users={users} handleSelectedUser={handleSelectedUser} selectedUser={selectedUser} />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
