import { Controller,Get,Post ,Body,Param,NotFoundException} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    messagesService:MessagesService
    constructor(messagesService:MessagesService){
        this.messagesService = messagesService
    }
    @Get('/')
    getAllMessages(){
        try{
            return this.messagesService.findAllMessages()
        }
        catch(err){
            return err.message
        }
    }

    @Post()
    createNewMessage(@Body() body:CreateMessageDTO){
        return this.messagesService.createNewMessage(body.content
        )
    }

    @Get('/:id')
    async getMessageById(@Param('id') id:string){
        const message = await this.messagesService.findMessageById(id)
        if(!message){
            throw new NotFoundException("No message found with this id")
        }
        return message
    }
}
