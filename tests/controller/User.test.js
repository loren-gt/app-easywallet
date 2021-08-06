const { User } = require('../../models');
const user = require('../../service/User');
const userController = require('../../controller/User');

let mockData;

describe('User Controller', () => {
  describe('Get user by Id', () => {
    it('Should return a user when a valid Id is called (200)', async () => {
      mockData = {
        id: 1,
        isAdmin: false,
        fullName: 'Daiane dos Santos',
        email: 'daiane_santos@gmail.com',
      };
      const getOneSpy = jest.spyOn(user, 'getById').mockResolvedValueOnce(mockData);

      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn(), json: jest.fn() };

      await userController.getUserById(mockReq, mockRes);

      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockData);
      getOneSpy.mockRestore();
    });
// Ver esse aqui embaixo: <<<<<<<<<>>>>>>>>>>>>>>>>>>>>>
    it('Should return Not Found when a invalid Id is called (404)', async () => {
      mockData = null;
      const getOneSpy = jest.spyOn(user, 'getById').mockResolvedValueOnce(mockData);

      const mockRq = { params: { id: 156418484842 } };
      const mockRs = { status: jest.fn(), json: jest.fn() };

      await userController.getUserById(mockRq, mockRs);

      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRs.status).toHaveBeenCalledWith(404);
      except(mockRs.json).toHaveBeenCalledWith({ message: 'Pessoa usuária não encontrada' });
      getOneSpy.mockRestore();
    });
// <<<<<<<<<<<<<<<<<Esse também: >>>>>>>>>>>>>>>>
    it('Should return Intern Server Error when a model error happens (500)', async () => {
      const getOneSpy = jest.spyOn(user, 'getById').mockResolvedValueOnce(new Error());
      const mockReq = { params: { id: 1 } };
      const mockRes = { status: jest.fn(), json: jest.fn() };

      await userController.getUserById(mockReq, mockRes);
      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      getOneSpy.mockRestore();
    });
  });

  describe('Get all users', () => {
    test('Should return all users (200)', async () => {
      mockData = [
        {
          id: 1,
          isAdmin: false,
          fullName: 'Daiane dos Santos',
          email: 'daiane_santos@gmail.com',
        },
        {
          id: 2,
          isAdmin: true,
          fullName: 'Dua Lipa',
          email: 'dua_lipa@gmail.com',
        },
        {
          id: 3,
          isAdmin: false,
          fullName: 'Hortência Marcari',
          email: 'hortencia_marcari@gmail.com',
        },
        {
          id: 4,
          isAdmin: true,
          fullName: 'Joelma da Silva',
          email: 'joelma_silva@gmail.com',
        }
      ]
      const getOneSpy = jest.spyOn(user, 'getById').mockResolvedValueOnce(mockData);

      // const mockReq = { }
      const mockRes = { status: jest.fn(), json: jest.fn() };

      await userController.getAllUsers(mockRes);

      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockData);
      getOneSpy.mockRestore();
    });
  });
});