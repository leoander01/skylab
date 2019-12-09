const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//schema = quais campos e que tipos de valores vão salvar
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    //preenchimento automático da data
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

//registrar o model na aplicação
mongoose.model('Product', ProductSchema);