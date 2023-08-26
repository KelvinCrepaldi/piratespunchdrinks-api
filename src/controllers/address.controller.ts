import { Request, Response } from "express";
import createAddressService from "../services/address/createAddress.service";
import { AppError, handleError } from "../errors/appErrors";
import deleteAddressService from "../services/address/deleteAddress.service";
import listUserAddressesService from "../services/address/listUserAddresses.service";
import updateAddressService from "../services/address/updateAddress.service";

const createAddressController = async (req: Request, res: Response) => {
  try {
    const { address, cep, city, complement, country, number, state } = req.body;

    const id = req.user.id;

    const newAddress = await createAddressService({
      address,
      cep,
      city,
      complement,
      country,
      number,
      state,
      userId: id,
    });

    res.status(200).json(newAddress);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const deleteAddressController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const address = await deleteAddressService({ id });

    return res.status(200).json(address);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listUserAddressesController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;

    const addressList = await listUserAddressesService({ id });

    return res.status(200).json(addressList);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const updateAddressController = async (req: Request, res: Response) => {
  try {
    const { address, cep, city, complement, country, number, state } = req.body;
    const id = req.user.id;
    const { addressId } = req.params;

    const response = await updateAddressService({
      userId: id,
      addressId,
      address,
      cep,
      city,
      complement,
      country,
      number,
      state,
    });

    return res.status(200).json(response);
  } catch (err) {
    if (err instanceof AppError) handleError(err, res);
  }
};

export {
  createAddressController,
  deleteAddressController,
  listUserAddressesController,
  updateAddressController,
};
