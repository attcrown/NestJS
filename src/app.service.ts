import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './userToken.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Token) private readonly userRepository: Repository<Token>
  ) {

  }

  getHello(): string {
    return 'Hello World! nestjs noob';
  }

  async create(data: any): Promise<Token> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<Token> {
    return this.userRepository.findOne({where:condition});
  }

  async findAll(): Promise<Token[]> {
    return this.userRepository.find();
  }
}
