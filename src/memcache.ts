export class MemCache {
  private cache: Map<string, unknown> = new Map();

  public set(key: string, value: unknown) {
    this.cache.set(key, value);
  }

  public get(key: string) {
    return this.cache.get(key);
  }

  public has(key: string) {
    return this.cache.has(key);
  }

  public delete(key: string) {
    this.cache.delete(key);
  }
}
