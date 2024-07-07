import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
@Injectable()
export class MessagesService{
    messagesRepo:MessagesRepository
    constructor(messagesRepo:MessagesRepository){
        //do not create any class repository as dependency
        this.messagesRepo = messagesRepo;
    }

    findMessageById(id:string){
        return this.messagesRepo.findOne(id)
    }

    findAllMessages(){
        return this.messagesRepo.findAll()
    }

    createNewMessage(message:string){
        return this.messagesRepo.createNew(message)
    }
}