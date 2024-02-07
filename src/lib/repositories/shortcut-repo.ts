import { getApiClient } from "@/lib/factories/api-factory";
import { ShortcutModel } from "@/lib/models/shortcut-model";

const apiClient = getApiClient();

export const getMainShortcuts = async(): Promise<ShortcutModel[]> => {
    try {
        const path = 'main-shortcut/all';
        const responseData = await apiClient.fetchData(path);
        
        const data = responseData as ShortcutModel[];

        return data;
        
    }catch(error) {
        console.log("[SHORTCUT_REPO]", error);
        return [];
    }
}