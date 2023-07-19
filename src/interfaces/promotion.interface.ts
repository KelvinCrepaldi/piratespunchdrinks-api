export interface IPromotionRequest {
  type: string;
  value: number;
  initialDate: Date;
  finalDate: Date;
  products: string[];
}
