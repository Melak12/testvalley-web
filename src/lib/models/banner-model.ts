export interface BannerModel {
    mainBannerId: number;
    title: string;
    sort: number;
    pcImageUrl?: string;
    mobileImageUrl?: string;
    linkUrl?: string;
    startDate?: string;
    endDate?: string;
}