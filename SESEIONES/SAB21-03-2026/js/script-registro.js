// Función para el el formulario 
const loginForm = document.getElementById('loginForm');

loginForm?.addEventListener('submit', function(e){
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  const userEncontrado = users.find(user =>
    user.email === email && user.password === password  
  );
  
  if(userEncontrado){
    localStorage.setItem('userActivo', JSON.stringify(userEncontrado));
    window.location.href = 'user-page.html';
  }else{
    alert('Credenciales incorrectos ❌');
  }
  console.log(users)
});

function irRegistro() {
  window.location.href = 'form-registro.html';
}


// Función parea el registro
const formRegistro = document.getElementById('formRegistro');

formRegistro?.addEventListener('submit',function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const formEmail = document.getElementById('formEmail').value;
  const formPassword = document.getElementById('formPassword').value;

  const user = {
    name: name,
    email: formEmail,
    password: formPassword,
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.push(user);
  
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registro exitoso');
  formRegistro.reset();
  window.location.href = 'home.html' 
} )



// Funciones para página de usuario
const userActivo = JSON.parse(localStorage.getItem('userActivo'));

const user = document.getElementById('user').textContent = `${userActivo.name}`;
const btnCerrarSesion = document.getElementById('btnCerrarSesion');

btnCerrarSesion.addEventListener('click', ()=>{
  localStorage.removeItem('userActivo');
  window.location.href = 'home.html'
} ) 



function alerts(){
  alert('doble clic')
}