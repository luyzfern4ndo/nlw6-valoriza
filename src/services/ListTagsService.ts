import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';

import { Tag } from '../entities/Tag';
import { TagsRepositories } from '../repositories/TagsRepositories';

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();
    // tags.map(tag => ({ ...tag, nameCustom: `#${tag}` }));

    return classToPlain(tags);
  }
}

export { ListTagsService };
