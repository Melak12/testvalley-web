import { ApiService } from "@/lib/services/api-service";
import BackendApiService from "@/lib/services/backend-api-service";
import MockApiService from "@/lib/services/mock-api-service";

export const getApiClient = (): ApiService => {
    const type = process.env.NEXT_PUBLIC_API_TYPE;
    if (type) {

        if (type === 'server') return new BackendApiService();
        else if (type === 'mock') return new MockApiService();
        else throw new Error('Invalid NEXT_PUBLIC_API_TYPE env variable value')
    }else {
        return new BackendApiService(); 
    }

}


