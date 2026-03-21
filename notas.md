###### SESIÓN UNO LUN16.03.2023 HORA: 07:00PM

# Local Storage

## Guardar información en el navegador
- localStorage.setItem('key', 'valor de la key')       -> Recibe dos argumentos: la clave y su valor. Ambos del tipo STRING 
- localStorage.setItem('key', JSON.stringify(obj))     -> Cuando valor es un objeto se debe convertir antes a STRING usando JSON.stringify(obj)

## Trae la información guardada en el navegador
- localStorage.getItem('key')
- JSON.parse(localStorage.getItem('key'))              -> Para traer la data debes convertir ese STRING a OBJETO usando JSON.parse(obj)

## Eliminar información guardada en el navegador
- localStorage.removeItem('key')

# Convertir OBJETO a STRING
- JSON.stringify(obj)

# Convertir STRING a OBJETO 
- JSON.parce(obj)

# Saber el tipo de dato
- typeof data -> console.log(typeof data);





# EJEMPLO:
```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form id="form">
        <label for="name">Nombre:</label>
        <input type="text" id="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" required><br><br>
        
        <label for="password">Contraseña:</label>
        <input type="password" id="password" required><br><br>
        
        <button type="submit">Registrarse</button>
    </form>
    
    <script>
        const form = document.getElementById('form');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const user = {
                name: name,
                email: email,
                password: password
            };
            
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Registro exitoso');
            form.reset(); // Limpiar el form
        });
    </script>
</body>
</html>
```