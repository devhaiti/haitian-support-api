//@ts-ignore
import { RESTDataSource } from 'apollo-datasource-rest';
export class NiouzDataSource extends RESTDataSource {

    constructor() {
      super()
      this.baseURL = 'https://api.niouz.app/';
    }
  
    async getFeed() {
      try {
        const query = `
          query {
            feed {
              id
              title
              description
              body
              photo
              source
              createdAt   
            }
          }
        `;

        const { data } = await this.post('api', { query });
        return data.feed;
      } catch (error) {
        console.error(error);
      }
    }
  }