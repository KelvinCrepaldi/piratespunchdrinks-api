import { Like } from "typeorm";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

interface IListProductsServiceRequest {
  search?: string;
  category?: string;
  take?: string;
  page?: string;
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

  console.log({
    data: [...result],
    count: total,
    currentPage: page,
    lastPage: lastPage,
    nextPage: nextPage,
    prevPage: prevPage,
  });
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
  search = "",
  category = "",
  take = "10",
  page = "1",
}: IListProductsServiceRequest): Promise<IListProductsServiceResponse> => {
  const productsRepository = AppDataSource.getRepository(Product);
  let numberTake = parseInt(take);
  let numberPage = parseInt(page);
  const skip = (numberPage - 1) * numberTake;

  const products = await productsRepository.findAndCount({
    where: category
      ? [
          {
            active: true,
            category: { name: Like("%" + category + "%") },
          },
        ]
      : [
          {
            active: true,
            name: Like("%" + search + "%"),
          },
          {
            active: true,
            category: { name: Like("%" + search + "%") },
          },
        ],

    order: { name: "DESC" },
    take: numberTake,
    skip: skip,
  });

  return paginateResponse(products, numberPage, numberTake);
};

export default listProductsService;
