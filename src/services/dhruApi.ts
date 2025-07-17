export interface DhruProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url?: string;
  status: 'active' | 'inactive';
  min_quantity: number;
  max_quantity: number;
}

export interface DhruCategory {
  id: number;
  name: string;
  status: 'active' | 'inactive';
}

export interface DhruApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

class DhruApiService {
  private baseUrl: string = '';
  private apiKey: string = '';

  setCredentials(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  private async makeRequest<T>(endpoint: string): Promise<DhruApiResponse<T>> {
    if (!this.baseUrl || !this.apiKey) {
      throw new Error('Dhru API credentials not configured');
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: this.apiKey,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getCategories(): Promise<DhruCategory[]> {
    const response = await this.makeRequest<DhruCategory[]>('/categories');
    return response.data;
  }

  async getProducts(categoryId?: number): Promise<DhruProduct[]> {
    const endpoint = categoryId ? `/products/${categoryId}` : '/products';
    const response = await this.makeRequest<DhruProduct[]>(endpoint);
    return response.data;
  }

  async getProduct(productId: number): Promise<DhruProduct> {
    const response = await this.makeRequest<DhruProduct>(`/product/${productId}`);
    return response.data;
  }

  async getBalance(): Promise<{ balance: number }> {
    const response = await this.makeRequest<{ balance: number }>('/balance');
    return response.data;
  }
}

export const dhruApi = new DhruApiService();