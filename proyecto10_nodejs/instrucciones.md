# API Clientes

## Recuperar todos los clientes

Method: GET
Url: /api/clientes
Headers: Authorization -> TOKEN
Body: XXXXX

Respuesta:  
- Array con todos los clientes (JSON)

## Creación de clientes

Method: POST
Url: /api/clientes
Headers: XXXXX
Body: nombre, apellidos, emails...

Respuesta: 
- 201 + Datos del nuevo cliente (JSON)

## Borrado de un cliente

Method: DELETE
Url: /api/clientes/IDCLIENTE
Headers: XXXXX
Body: XXXX

Respuesta: 
- Datos del cliente borrado

## Actualización completa de cliente

Method: PUT
Url: /api/clientes/IDCLIENTE
Headers: XXXXX
Body: Todos los datos del cliente

Respuesta:
- Retornar el cliente actualizado