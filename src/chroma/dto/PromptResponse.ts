import { ApiProperty } from "@nestjs/swagger";
import { Prompt } from "./Prompt";

export class PromptResponse {

    @ApiProperty()
    prompt: Prompt;

    @ApiProperty()
    answer: string;

    @ApiProperty()
    response_id: string;

    @ApiProperty()
    response_message_id: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    user_name: string;

    @ApiProperty()
    sources: string[];

    @ApiProperty()
    date: number;

    @ApiProperty()
    rating: {
      type: "good" | "bad" | "none";
      response?: string;
    };
  };
  