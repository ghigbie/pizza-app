export class MethodNotAllowed extends Error {
  public status: number;
  public title: string;
  public details: string;

  constructor(message?: string) {
    super(message);
    this.status = 405;
    this.title = 'Method Not Allowed';
    this.details = 'That HTTP method is not allowed for this API.';
  }
}
