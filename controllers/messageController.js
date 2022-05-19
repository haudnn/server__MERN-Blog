import  { MessagesModel } from '../models/MessagesModel.js'
export const  createMessage = async (req, res, next) =>{
    try {
        const  newMessage = await MessagesModel.create({...req.body})
        res.status(200).json(newMessage);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};
export const  getMessage = async (req, res, next) =>{
    try {
        const messages = await MessagesModel.find({
            conversationId: req.params.conversationId,
        })
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};


