/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.post('register', 'SessionsController.register')
    Route.post('login', 'SessionsController.login')
}).prefix('auth')
    


//Routers Students
Route.post('/students','StudentsController.create');
Route.get('/students', 'StudentsController.index');
Route.get('/student/:id', 'StudentsController.show');
Route.put('/student/:id', 'StudentsController.update');
Route.delete('/student/:id', 'StudentsController.destroy');

//Router Teachers

Route.post('/teacher','TeachersController.create');
Route.get('/teachers','TeachersController.index');
Route.get('/teacher/:id','TeachersController.show');
Route.put('/teacher/:id','TeachersController.update');
Route.delete('/teacher/:id','TeachersController.destroy');

//Routes Classes
Route.post('/classe','ClasseStudentsController.addAluno')
Route.group(()=>{
    Route.resource('teacher.class', 'ClassesController').apiOnly()
})

