export class DirectusResponse<T> {
  data: T
}

export class Recipe {
  name: string;
  description: string;
  image: string;
  document: string;
}

export class Quote {
  author: string;
  quote: string;
  image: string
}

export class Recommendation {
  title: string;
  recommendation: string;
  image: string;
  document: string | undefined;
}

export class Mission {
  statement: string;
  summary: string
}

export class Service {
  id: number
  name: string;
  type: 'inPerson' | 'virtual';
  price: string;
  interval?: string;
  details: ServiceDetail[];
  location?: string;
  image?: string;
}

export class ServiceDetail {
  detail: string
}

export class Transaction {
  firstName: string;
  lastName: string;
  email: string;
  serviceName: string;
  total: string
}

export class EmailPayload {
  fistName: string;
  lastName: string;
  email: string;
  comments: string;
}

export class EmailResponse {
  ResponseMetadata: {
    RequestId: string
  }
  MessageId: string;
}
