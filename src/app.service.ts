import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNextPage(): string {
    return 'This is the Next Page';
  }

  getUser(): object {
    return {
      name: "jolly",
      age: 29,
      meta: {
        height: "5'7"
      }
    };
  }

  createUser(data): object {
    return {
      name: data.name,
      age: data.age
    };
  }

  fetchAUser(params): string {
    return `${params} user found`;
  }
}
