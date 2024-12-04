import { Controller, Get } from '@nestjs/common';
import { ChromaService } from './chroma.service';
import { PromptResponse } from './dto/PromptResponse';


@Controller('stella')
export class ChromaController {
  constructor(private readonly chromaService: ChromaService) {}

  @Get()
  getResponse(): PromptResponse {
    return this.chromaService.getPromptResponse();
  }
}
