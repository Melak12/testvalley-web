import { getApiClient } from "@/lib/factories/api-factory";
import { BannerModel } from "@/lib/models/banner-model";

const apiClient = getApiClient();

export const getMainBanners = async(): Promise<BannerModel[]> => {
    try {
        const path = 'main-banner/all';
        const responseData = await apiClient.fetchData(path);
        
        const data = responseData as BannerModel[];

        return data;
        
    }catch(error) {
        console.log("[BANNER_REPO]", error);
        return [];
    }
}