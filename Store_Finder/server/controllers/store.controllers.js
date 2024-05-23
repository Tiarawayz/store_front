const Store = require ('../models/store.models');


module.exports.getallstore = (req,res) => {
  Store.find({})
        .then((allTheStore) => {
          console.log (allTheStore);
          res.json ({ store: allTheStore});
        })
        .catch((err) =>{
          console.log(err)
          res.json ({ message: 'Something went wrong', error:err })
        });
}

module.exports.findOneStore = (req,res) => {
  Store.findOne({_id: req.params.id})
        .then(oneStore =>{
          console.log (oneStore);
          res.json({store: oneStore});
        })
        .catch((err) => {
          res.json ({ message: 'Something went wrong', error:err})
        });
}

module.exports.createStore = (req,res) =>{
  Store.create(req.body)
        .then(newStore =>{
          res.json({store: newStore})
        })
        .catch((err) =>{
          res.json({ message: 'Something went wrong', error:err})
        });
}

module.exports.updateStore = (req,res) =>{
  Store.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true, runValidators:true}
  )
  .then(updateStore =>{
    res.json({store: updateStore})
  })
  .catch((err) =>{
    res.json({ message: 'Something went wrong', error: err})
  });
}

module.exports.deleteStore = (req,res) => {
  Store.deleteOne({_id: req.params.id})
  .then(result =>{
    res,json({result: result})
  })
  .catch((err) =>{
    res.json({ message: 'Something went wrong', error: err})
  });
}