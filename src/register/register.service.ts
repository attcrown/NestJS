import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Register } from './entities/register.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private usersRepository: Repository<Register>,
  ) {}

  findAll(): Promise<Register[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Register | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  create(createRegisterDto: CreateRegisterDto) {
    return this.usersRepository.save(createRegisterDto);
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return this.usersRepository.update(id,updateRegisterDto);
  }
}
