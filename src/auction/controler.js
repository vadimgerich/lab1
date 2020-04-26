import Lot from "./model"
import mongoose from "mongoose"

const lotControler = {
    //отримати всі
    get: function (request, response) {
        Lot.find().populate("title")
        .then(lots=>{
                response.send(lots);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //get
    //отримати одну з вказаним ІД
    get_byData: function (request, response) {
        Lot.findById(request.params.id)
        .then(lot=>{
            if ((lot.startData<=request.startData) &&(lot.endData<=request.endData))
                response.send(lot);
            else
                response.status(404).send("Не знайдено");  
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //getById
    //додати нову
    post: function (request, response) {  
        console.log("lot")    
        const newLot = new Lot(request.body);
        newLot.save()
        .then(lot=>{
            response.send(lot);    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//post
    //вилучити із вказаним ІД
    delete_id: function (request, response) {
        Lot.findByIdAndDelete(request.params.id).
        then(lot=>{
            if (lot)
                response.send(lot);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    }
}
//валідатор чи є в книги назва  і автор
function isValid(lot) {
    return lot && lot.title && lot.startData && lot.endData && lot.startPrice && lot.endPrice;
}

export default lotControler;