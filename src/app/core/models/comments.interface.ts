export interface ICommentsResponse{
    data: IComments[] | [],
    message: string
}

export interface IComments{
    id: number;
    description: string;
    earthquake_id: number;
    created_at: string;
    updated_at: string;
}