export interface ILineChartOptions {
    type: string;
    id: number;
}

export interface ILineChartData {
    options: ILineChartOptions[]
}

export interface IChartReducer {
    lineChartData: ILineChartData | unknown
}