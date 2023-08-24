import { FindOptionsOrderValue, Like } from "typeorm";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

interface IListProductsServiceRequest {
  name?: string;
  date?: string;
  search?: string;
  category?: string;
  take?: string;
  page?: string;
  price?: string;
}

interface IListProductsServiceResponse {
  data: any[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
}

const paginateResponse = (
  data: any,
  page: number,
  limit: number
): IListProductsServiceResponse => {
  const [result, total] = data;
  const lastPage = Math.ceil(total / limit);
  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;

  console.log({ lastPage, nextPage, prevPage });

  return {
    data: [...result],
    count: total,
    currentPage: page,
    lastPage: lastPage,
    nextPage: nextPage,
    prevPage: prevPage,
  };
};

const listProductsService = async ({
  name = undefined,
  date = undefined,
  price = undefined,
  search = undefined,
  category = undefined,
  take = "20",
  page = "1",
}: IListProductsServiceRequest): Promise<IListProductsServiceResponse> => {
  const productsRepository = AppDataSource.getRepository(Product);
  let numberTake = parseInt(take);
  let numberPage = parseInt(page);
  const skip = (numberPage - 1) * numberTake;

  const filter = [];

  search && filter.push({ name: Like("%" + search + "%") });
  category && filter.push({ category: { name: Like("%" + category + "%") } });

  const products = await productsRepository.findAndCount({
    where: filter,
    order: {
      price: price ? (price as FindOptionsOrderValue) : undefined,
      name: name ? (name as FindOptionsOrderValue) : undefined,
      created_at: date ? (date as FindOptionsOrderValue) : undefined,
    },
    take: numberTake,
    skip: skip,
  });

  return paginateResponse(products, numberPage, numberTake);
};

export default listProductsService;
