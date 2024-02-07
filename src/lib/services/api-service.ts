export interface ApiService {
    fetchData(endpoint: string, queryParams?: Record<string, any>): Promise<any> ;
    createData(endpoint: string, data: any): Promise<any>;
    updateData(endpoint: string, id: string, updatedData: any): Promise<any>;
    deleteData(endpoint: string, id: string): Promise<void>
}