import { Injectable } from '@nestjs/common'
import {readFile,writeFile} from 'fs/promises'

@Injectable()
export class MessagesRepository{

    async findAll(){
        const data = await readFile('messages.json','utf-8')
        return JSON.parse(data)
    }

    async findOne(id:string){
        let data = await readFile('messages.json','utf-8')
        data = JSON.parse(data)
        return data[id]
    }

    async createNew(message:string){
        const data = await readFile('messages.json','utf-8')
        const dataObj = JSON.parse(data)
        let length = Object.entries(dataObj).length;
        const newMessageId:number = length+1;
        dataObj[newMessageId] = {
            "id":newMessageId,
            "content":message
        }
        console.log(dataObj)
        await writeFile('messages.json',JSON.stringify(dataObj),'utf-8')
        return dataObj[newMessageId]
    }
}