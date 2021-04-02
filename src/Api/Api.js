class ApiClass {
  constructor() {
    this.path = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  }

  async getData(word) {
    let str = this.path;

    str += `${word}`;

    const result = await fetch(str);

    if (!result.ok) {
      throw new Error(`No data was found at ${url}, received ${result.status}`);
    }
     return await result.json();
  }
  async getAudio (word) {
    return  await this.getData(word).then(data => data[0].phonetics[0].audio)
  }

}



export const Api = new ApiClass();
