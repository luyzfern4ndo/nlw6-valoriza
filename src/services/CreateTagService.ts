import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface IRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: IRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new AppError('Incorrect name');
    }

    // SELECT * FROM tags WHERE name = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists');
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
