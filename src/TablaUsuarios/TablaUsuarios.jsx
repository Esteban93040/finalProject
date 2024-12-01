import React, { useState } from "react";
import "./TablaUsuarios.css"; // Archivo CSS para estilos
import NavBar from "../NavBar/NavBar";

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const agregarUsuario = () => {
    if (nombre.trim() === "" || email.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setUsuarios([...usuarios, { id: Date.now(), nombre, email }]);
    setNombre("");
    setEmail("");
  };

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div>
        <NavBar />
        <div className="tabla-usuarios-container">
      <h1>Gestión de Usuarios</h1>
      <div className="formulario">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={agregarUsuario}>Agregar Usuario</button>
      </div>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length === 0 ? (
            <tr>
              <td colSpan="4" className="sin-usuarios">
                No hay usuarios.
              </td>
            </tr>
          ) : (
            usuarios.map((usuario, index) => (
              <tr key={usuario.id}>
                <td>{index + 1}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarUsuario(usuario.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TablaUsuarios;
