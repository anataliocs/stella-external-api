import { Module } from '@nestjs/common';
import { ChromaController } from './chroma/chroma.controller';
import { ChromaService } from './chroma/chroma.service';

@Module({
  imports: [],
  controllers: [ChromaController],
  providers: [ChromaService],
})
export class AppModule {}
