import { ApiService } from "./api-service";

class MockApiService implements ApiService {
    private baseURL: string;

    constructor() {
        this.baseURL = '/mocks';
    }

    async fetchData(endpoint: string, queryParams?: Record<string, any>): Promise<any> {
        const url = `${this.baseURL}/${endpoint}.json`;

        return this.request(url, {
            method: 'GET',
        });
    }


    createData(endpoint: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateData(endpoint: string, id: string, updatedData: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteData(endpoint: string, id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


    private async request(url: string, options: RequestInit): Promise<any> {
        try {
            const response = await fetch(url, options);

            if (response.ok) {
                return response.json();
            }

            throw new Error(`Request failed with status ${response.status}`);
        } catch (error) {
            throw new Error(`Error making request: ${error}`);
        }
    }
}

export default MockApiService;