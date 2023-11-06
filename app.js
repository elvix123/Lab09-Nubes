const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {
  res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
});

// Ruta para renderizar la plantilla EJS
app.get('/miplantilla-ejs', (req, res) => {
  const mensaje = 'Hola, desde mira este mensaje.';
  const mensajetwo = 'Habla causa.';
  res.render('miplantilla.ejs', {mensaje,mensajetwo});
  
});




app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  let id, nombre
  if (userId === '1') {
    id = '1';
    nombre = 'Adidas';
    
  } else if (userId === '2') {
    id = '2';
    nombre = 'Golden View';
    // Define datos estáticos de productos para el perfil 2
  } else {
    // Puedes manejar una página de error o redirigir a una página predeterminada si el perfil no existe
    res.status(404).send('Perfil no encontrado');
    return;
  }

  res.render('index.ejs', { user: { id: userId, nombre} });
});



app.get('/empresa/:id', (req, res) => {
  const userId = req.params.id;
  
  let direccion,nombre,vision

  // Determina el ID y el nombre del usuario según el perfil
  if (userId === '1') {
    nombre = "Adidas"
    direccion = 'Av.Amistad'
    vision = "La visión de Adidas es ser la mejor empresa deportiva del mundo, y lo persigue a través de la creación de productos que ayuden a las personas a alcanzar su máximo potencial deportivo. Además, se esfuerzan por ser líderes en sostenibilidad, trabajando en la reducción de su impacto ambiental y social en todas las etapas de su cadena de suministro."
  } else if (userId === '2') {
    nombre = "Golden"
    direccion = 'Av.Venezuela'
    vision = "Nos esforzamos por ser líderes en el mundo de la moda, no solo ofreciendo prendas de vestir elegantes y de alta calidad, sino también creando una experiencia de compra inolvidable para nuestros clientes. Buscamos constantemente nuevas tendencias y diseños únicos que inspiren la creatividad y la confianza en aquellos que eligen vestir nuestras prendas."
  } else {
    // Puedes manejar una página de error o redirigir a una página predeterminada si el perfil no existe
    res.status(404).send('Perfil no encontrado');
    return;
  }

  res.render('empresa.ejs', { user : { id: userId, direccion, nombre, vision } } );
});

app.get('/productos/:id', (req, res) => {
  const userId = req.params.id;

  let productos,nombre

  // Determina el ID y el nombre del usuario según el perfil
  if (userId === '1') {
     nombre = "Adidas"
    
    // Define datos estáticos de productos para el perfil 1
    productos = [
      { nombre: 'Producto 1', precio: 50, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/8586162-800-800/2030355.jpg?v=637874824773270000" },
      { nombre: 'Producto 2', precio: 75, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/10140965-800-800/2135454.jpg?v=637949325651730000"},
      { nombre: 'Producto 3', precio: 65, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/14156203-800-800/2335682.jpg?v=638150616567270000"},
      { nombre: 'Producto 4', precio: 80, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/14247665-800-800/2136257.jpg?v=638156553722670000"},
      { nombre: 'Producto 5', precio: 95, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/14156753-1000-1000/2335936.jpg?v=638150618701230000"},
      { nombre: 'Producto 6', precio: 100, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/16377091-800-800/image-c5b5aadf18df447a863e03b15f9da903.jpg?v=638316318601370000"},
      // Agrega más datos de productos según sea necesario
    ];
  } else if (userId === '2') {
      nombre = "Golden View"
    // Define datos estáticos de productos para el perfil 2
    productos = [
      { nombre: 'Producto 1', precio: 100, imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19854303_2?wid=240&hei=240&qlt=70&fmt=webp"},
      { nombre: 'Producto 2', precio: 120 , imagen: "https://falabella.scene7.com/is/image/FalabellaPE/882836980_2?wid=240&hei=240&qlt=70&fmt=webp" },
      { nombre: 'Producto 2', precio: 70 , imagen: "https://falabella.scene7.com/is/image/FalabellaPE/882838418_2?wid=240&hei=240&qlt=70&fmt=webp" },
      { nombre: 'Producto 2', precio: 150 , imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19756901_2?wid=240&hei=240&qlt=70&fmt=webp" },
      { nombre: 'Producto 2', precio: 130 , imagen: "https://falabella.scene7.com/is/image/FalabellaPE/882834863_2?wid=240&hei=240&qlt=70&fmt=webp" },
      { nombre: 'Producto 2', precio: 56 , imagen: "https://falabella.scene7.com/is/image/FalabellaPE/882694200_2?wid=240&hei=240&qlt=70&fmt=webp" },
      // Agrega más datos de productos según sea necesario
    ];
  } else {
    // Puedes manejar una página de error o redirigir a una página predeterminada si el perfil no existe
    res.status(404).send('Perfil no encontrado');
    return;
  }

  res.render('productos.ejs', { user : { id: userId, nombre}, productos } );
});

app.get('/contacto/:id', (req, res) => {
  const userId = req.params.id
  let nombre,email,telefono
  
  if (userId === '1') {
      nombre = "Adidas"
      email = "contacto@adidas.com"
      telefono = "555-123-4567"
  } else if (userId === '2') {
      nombre = "Golden View"
      email = "contacto@goldenview.com"
      telefono = "555-987-6543"
  
  } else {
  
    res.status(404).send('Perfil no encontrado');
    return;
  }

  res.render('contacto.ejs', { user: { id: userId, nombre, email, telefono }});
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});

