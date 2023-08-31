import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Inventory, Login} from "./pages";
import {AuthenticationLayout, DashboardLayout} from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationLayout />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="inventory" element={<Inventory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
