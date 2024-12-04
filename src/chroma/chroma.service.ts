import { Injectable } from '@nestjs/common';
import { PromptResponse } from './dto/PromptResponse';

@Injectable()
export class ChromaService {

  private readonly prompt: PromptResponse = {
    prompt: {
      embedding: [ -0.03813587, -0.02192164, -0.0016345971, -0.005634445, -0.003958299, 0.00806658, 0.0028374903],
      text: 'Stella, how do I write a Soroban Smart Contract'
    },
    answer: 'How to write a Soroban Smart Contract',
    response_id: '123',
    response_message_id: '1234',
    user_id: '123',
    user_name: '1234',
    sources: [],
    date: Date.now(),
    rating: {
      type: 'good',
      response: ''
    }
  };

  getPromptResponse(): PromptResponse {
    return this.prompt;
  }
}
