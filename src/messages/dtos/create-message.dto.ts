import { IsString,IsNumber } from "class-validator"
export class CreateMessageDTO{

    @IsString()
    content:string

}