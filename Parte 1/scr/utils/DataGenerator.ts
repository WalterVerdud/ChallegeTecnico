export class DataGenerator {

  static randomId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  static petName(): string {
    return `Dog_${this.randomId()}`;
  }

}