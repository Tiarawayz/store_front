const StoreControllers = require ('../controllers/store.controllers')

module.exports = app =>{
  app.get('/api/allstore', StoreControllers.getallstore);
  app.post('/api/newstore', StoreControllers.createStore);
  app.get('/api/onestore/:id', StoreControllers.findOneStore);
  app.patch('/api/updatestore/:id', StoreControllers.updateStore);
  app.delete('/api/deletestore/:id', StoreControllers.deleteStore)
}