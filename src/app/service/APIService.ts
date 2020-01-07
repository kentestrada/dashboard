import * as fetch from 'node-fetch';

export interface IAPIservice {
  headers: string[][];
  method: ApiMethod;
  baseUrl: string;
  uri: string;
  body: RequestBody<any>;
  fetch(): Promise<any>;
  setHeaders(headers: KeyValue<string, string>[]): APIService;
  request<T>(body: T): RequestInit;
  setMethod(newMethod: ApiMethod): APIService;
  resetHeaders(): void;
}

export interface KeyValue<T, U> {
  key: T;
  value: U;
}

export type ApiMethod = 'POST' | 'GET';

export class APIService implements IAPIservice {
  // tslint:disable-next-line: variable-name
  public _headers: string[][] = [];
  // tslint:disable-next-line: variable-name
  public _method: ApiMethod = 'POST';
  // tslint:disable-next-line: variable-name
  public _baseUrl: string;
  // tslint:disable-next-line: variable-name
  public _body: RequestBody<any>;
  // tslint:disable-next-line: variable-name
  public _params: any;
  // tslint:disable-next-line: variable-name
  public _uri: string;

  public setHeaders(headers: KeyValue<string, string>[]): APIService {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty('key') &&
        headers[i].hasOwnProperty('value')
      ) {
        this._headers.push([headers[i].key, headers[i].value]);
      }
    }
    return this;
  }

  public request<T>(body?: T): RequestInit {
    return {
      headers: this._headers,
      method: this._method,
    };
  }

  public setMethod(newMethod: ApiMethod): APIService {
    this._method = newMethod;
    return this;
  }

  public resetHeaders(): void {
    this._headers = [];
  }

  get headers(): string[][] {
    return this._headers;
  }

  public resetParams(): void {
    this._params = [];
  }

  get params(): any {
    return this._params;
  }

  set params(newParams: any) {
    this._params = newParams;
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set uri(uri: string) {
    this._uri = uri;
  }

  get uri(): string {
    return this._uri;
  }

  set body(body: RequestBody<any>) {
    this._body = body;
  }

  get body(): RequestBody<any> {
    return this._body;
  }

  set method(method: ApiMethod) {
    this._method = method;
  }

  get method(): ApiMethod {
    return this._method;
  }

  public fetch() {
    // @TODO improve throwing and handling errors
    if (this.headers === []) { throw new Error('Request Header is not set'); }
    if (!this._method) { throw new Error('Request Method is not set'); }
    if (!this._baseUrl) { throw new Error('Endpoint Url is not set'); }

    const url = new URL(this.baseUrl + this.uri);

    if (this.params) {
      Object.keys(this.params).forEach(key => url.searchParams.append(key, this.params[key]));
    }

    return fetch(url, this.request(this.body))
    .then((res: any) => res.json())
    .catch((e) => {
      throw new Error(e);
    });
  }

}

export class RequestBody<T> {
  // tslint:disable-next-line: variable-name
  constructor(private _requestBody: T) {}

  get requestBody(): T {
    return this._requestBody;
  }

  set requestBody(newRequestBody: T) {
    this._requestBody = newRequestBody;
  }

}
