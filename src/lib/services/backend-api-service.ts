import { ApiService } from "./api-service";
import qs from "qs"
class BackendApiService implements ApiService{
    private baseURL: string;

    constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL??'';
    }
     async fetchData(
      path: string,
      urlParamsObject = {},
      options = {},
      query = {}
    ) {
      try {
        // Strapi Fetch Token
        const token = process.env.NEXT_PUBLIC_STRAPI_FETCH_API_TOKEN;
    
        // Merge default and user options
        const mergedOptions = {
          next: {
            revalidate: 30,
            tags: ["all_data"],
          }, //revalidate the cache at most every hour
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          ...options,
        };
    
        // Build request URL
        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${this.baseURL}/${path}`;
    
    
        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        if (!response.ok) {
          // This will activate the closest `error.js` Error Boundary
          console.log("=== Request URL ==== ", requestUrl);
          console.log("=== Status ==== ", response?.statusText);
          console.log("=== Body ==== ", response?.body); 
    
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(">>> Error in Fetching Data >>> ", error);
        throw new Error(
          `Please check if your server is running and you set all the required tokens.`
        );
      }
    }
    
      async createData(endpoint: string, data: any): Promise<any> {
        const url = `${this.baseURL}/${endpoint}`;
    
        return this.request(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }
    
      async updateData(endpoint: string, id: string, updatedData: any): Promise<any> {
        const url = `${this.baseURL}/${endpoint}/${id}`;
    
        return this.request(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
      }
    
      async deleteData(endpoint: string, id: string): Promise<void> {
        const url = `${this.baseURL}/${endpoint}/${id}`;
    
        return this.request(url, {
          method: 'DELETE',
        });
      }
    
      private formatQueryParams(queryParams?: Record<string, any>): string {
        if (!queryParams) return '';
    
        const queryString = new URLSearchParams(queryParams).toString();
        return queryString ? `?${queryString}` : '';
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

export default BackendApiService;