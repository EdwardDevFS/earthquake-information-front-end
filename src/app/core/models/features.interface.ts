export interface IResponse{
    data: IFeaturesResponse;
    message: string;
}

export interface IFeaturesResponse {
    data: IFeatures[];
    links: ILinks;
    pagination: IPagination;
}

export interface IFeatures{
    id: number;
    external_id: number;
    magnitude: number;
    place: string;
    url: string;
    time: string;
    tsunami: number;
    mag_type: TMagnitudeTypes;
    title: string;
    longitude: string;
    latitude: string;
    created_at: string;
    updated_at: string;
}

export type TMagnitudeTypes = "md" | "ml" | "ms" | "mw" | "me" | "mi" | "mb" | "mlg";

export interface IPagination {
    current_page: number;
    per_page: number;
    total: number;
}

export interface ILinks{
    external_url: string
}

