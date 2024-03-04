import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Screens/Login';

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  // <ProtectedRoute>
                    <Login />
                  // </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
