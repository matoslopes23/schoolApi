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

//Routers Students
Route.post('/students','StudentsController.create');
Route.get('/students', 'StudentsController.index');
Route.put('/student/:id', 'StudentsController.update');
Route.delete('/student/:id', 'StudentsController.destroy');

//Router Teachers

Route.post('/teacher','TeachersController.create');
Route.get('/teachers','TeachersController.index');
Route.put('/teacher/:id','TeachersController.update');
Route.delete('/teacher/:id','TeachersController.destroy');

//Routes Classes
Route.post('/class', 'ClassesController.create');
Route.get('/class/:id', 'ClassesController.show');
Route.get('/classes', 'ClassesController.index');


