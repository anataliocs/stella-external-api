import { ApiProperty } from '@nestjs/swagger';

export class Prompt {
    @ApiProperty()
    embedding: number[];

    @ApiProperty()
    text: string;
    
  };