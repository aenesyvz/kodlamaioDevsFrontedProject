export interface DynamicQuery{
    sort:Sort[];
    filter:Filter;
}

export interface Sort{
    field?:string;
    dir?:string;
}

export interface Filter{
    field?:string;
    operator?:string;
    value?:string;
    logic?:string;
    filters?:Filter[];
}