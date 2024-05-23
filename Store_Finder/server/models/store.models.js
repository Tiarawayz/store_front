const mongoose = require ('mongoose')

const StoreSchema = new mongoose.Schema({
    storename:{
      type: String,
      required: [true, "Store name is requied"],
      minlength: [3, "Store name must be at leasy 3 characters long"]
    },

    storenumber:{
      type: Number,
      required: [true, "Store number is required"],
      minlength: [0, "Store number must be a greater number than 0"]
    },

    open:{
      type: String
    }

},
  { timestamps: true}
);

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;