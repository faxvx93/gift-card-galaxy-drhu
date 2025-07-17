export interface DhruProduct {
  id: number;
  name: string;
  price: number;
  params: string[];
  category_name: string | null;
  available: boolean;
  qty_values: number[] | { min: string; max: string } | null;
  product_type: 'package' | 'amount' | 'specificPackage';
}

export interface DhruCategory {
  id: number;
  name: string;
  parent_id: number;
}

export interface DhruOrder {
  order_id: string;
  status: string;
  price: number;
  data: Record<string, any>;
  replay_api: any[];
}

export interface DhruOrderCheck {
  order_id: string;
  quantity: number;
  data: Record<string, any>;
  created_at: string;
  product_name: string;
  status: string;
  replay_api: any;
}

export interface DhruApiResponse<T> {
  status: string;
  data: T;
}

export interface DhruProfile {
  balance: string;
  email: string;
}

export interface DhruContent {
  products: DhruProduct[];
  categories: DhruCategory[];
}

class DhruApiService {
  private baseUrl: string = '';
  private apiToken: string = '';

  setCredentials(baseUrl: string, apiToken: string) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
  }

  private async makeRequest<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    if (!this.baseUrl || !this.apiToken) {
      throw new Error('Dhru API credentials not configured');
    }

    let url = `${this.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'api-token': this.apiToken,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getProducts(productIds?: number[]): Promise<DhruProduct[]> {
    const params: Record<string, string> = {};
    if (productIds) {
      params.products_id = JSON.stringify(productIds);
    }
    params.base = '1';
    
    return await this.makeRequest<DhruProduct[]>('/client/api/products', params);
  }

  async getProfile(): Promise<DhruProfile> {
    return await this.makeRequest<DhruProfile>('/client/api/profile');
  }

  async getBalance(): Promise<{ balance: number }> {
    const profile = await this.getProfile();
    return { balance: parseFloat(profile.balance) };
  }

  async getContent(categoryId: number = 0): Promise<DhruContent> {
    return await this.makeRequest<DhruContent>(`/client/api/content/${categoryId}`);
  }

  async getCategories(): Promise<DhruCategory[]> {
    const content = await this.getContent();
    return content.categories;
  }

  async createOrder(
    productId: number, 
    params: Record<string, string>, 
    orderUuid: string
  ): Promise<DhruOrder> {
    const queryParams = { ...params, order_uuid: orderUuid };
    return await this.makeRequest<DhruOrder>(`/client/api/newOrder/${productId}/params`, queryParams);
  }

  async checkOrders(orderIds: string[]): Promise<DhruApiResponse<DhruOrderCheck[]>> {
    const params = { orders: JSON.stringify(orderIds) };
    return await this.makeRequest<DhruApiResponse<DhruOrderCheck[]>>('/client/api/check', params);
  }
}

export const dhruApi = new DhruApiService();