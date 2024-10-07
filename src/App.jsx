import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EncabezaCuotasYEnvios from './components/EncabezaCuotasYEnvios';
import HeaderNav from './Components/headerNav';
import DescripcionYOrigen from './Components/descripcionYOrigen';
import Footer from './Components/footer';
import FormularioAgregarCalzado from './Components/formularioAgregarCalzado';
import PaginaProductos from './Components/PaginaProductos';
import ZapatosMujer from './components/ZapatosMujer';
import ZapatosHombres from './Components/zapatosHombres';
import Carrito from './Components/Carrito';
import Ventas from './Components/Ventas';

function App() {
  const [calzadoMujer, setCalzadoMujer] = useState([]);
  const [calzadoHombre, setCalzadoHombre] = useState([]); 
  const [carrito, setCarrito] = useState([]); 
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const datosCalzadoMujer = localStorage.getItem('calzadoMujer');
    const datosCalzadoHombre = localStorage.getItem('calzadoHombre');
    const ventasGuardadas = localStorage.getItem('ventas');

    if (datosCalzadoMujer) {
      setCalzadoMujer(JSON.parse(datosCalzadoMujer));
    }
    if (datosCalzadoHombre) {
      setCalzadoHombre(JSON.parse(datosCalzadoHombre));
    }
    if (ventasGuardadas) {
      setVentas(JSON.parse(ventasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calzadoMujer', JSON.stringify(calzadoMujer));
    localStorage.setItem('calzadoHombre', JSON.stringify(calzadoHombre));
  }, [calzadoMujer, calzadoHombre]);

  useEffect(() => {
    localStorage.setItem('ventas', JSON.stringify(ventas));  // Guardar ventas al cambiar
  }, [ventas]);

  const agregarCalzado = (nuevoCalzado, tipo) => {
    const nuevoCalzadoConId = { ...nuevoCalzado, id: Date.now() }; 
    if (tipo === 'femenino') {
      setCalzadoMujer((prev) => [...prev, nuevoCalzadoConId]);
    } else {
      setCalzadoHombre((prev) => [...prev, nuevoCalzadoConId]);
    }
  };

  const obtenerUltimosModelosMujer = () => {
    return calzadoMujer.slice(-6);
  };

  const obtenerUltimosModelosHombre = () => {
    return calzadoHombre.slice(-6);
  };

  const agregarAlCarrito = (producto) => {
    const productoConId = { ...producto, id: Date.now() }; 
    setCarrito((prev) => [...prev, productoConId]); 
  };

  const finalizarCompra = (datosCliente) => {
    const nuevaVenta = {
      cliente: datosCliente,
      productos: carrito.map(item => ({
        producto: item.Nombre,
        precio: item.Precio
      })),
    };

    setVentas((prevVentas) => [...prevVentas, nuevaVenta]);  // Actualizar estado de ventas
    setCarrito([]); // Vaciar el carrito
  };

  const quitarDelCarrito = (itemToRemove) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== itemToRemove.id)); 
  };

  return (
    <Router>
      <EncabezaCuotasYEnvios />
      <HeaderNav carrito={carrito.length} />
      <DescripcionYOrigen />
      <Routes>
        <Route
          path="/formulario"
          element={<FormularioAgregarCalzado agregarCalzado={agregarCalzado} />}
        />
        <Route 
          path="/ventas" 
          element={<Ventas ventas={ventas} />} 
        />
        <Route
          path="/productos"
          element={
            <PaginaProductos
              calzadoHombre={calzadoHombre}
              calzadoMujer={calzadoMujer}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route 
          path="/carrito" 
          element={
            <Carrito 
              carrito={carrito} 
              finalizarCompra={finalizarCompra} 
              quitarDelCarrito={quitarDelCarrito} 
            />
          } 
        />
      </Routes>

      <ZapatosMujer
        titulo="Últimos Modelos Femeninos"
        calzadoMujer={obtenerUltimosModelosMujer()}
        agregarAlCarrito={agregarAlCarrito}
      />
      <ZapatosHombres
        titulo="Últimos Modelos Masculinos"
        calzadoHombres={obtenerUltimosModelosHombre()}
        agregarAlCarrito={agregarAlCarrito}
      />

      <Footer />
    </Router>
  );
}

export default App;
