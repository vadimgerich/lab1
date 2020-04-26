import mongoose from 'mongoose';

const lotSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    startPrice:Number,
    endPrice:Number,
    startData:Number,
    endData:Number
});

const Lot = mongoose.model("Lot", lotSchema);

export default Lot;