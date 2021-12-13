import axios from "axios";
import { getData } from './utils/getData';
jest.mock("axios");

describe("pokemons", () => {
  describe("when API call is successful", () => {
    it("should return pokemons list", async () => {
      const pokemons = [
        {
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        }
      ];
      axios.get.mockImplementationOnce(() => Promise.resolve(pokemons));
      await expect(getData()).resolves.toEqual(pokemons);

      expect(axios.get).toHaveBeenCalledWith(
        `/pokeApi`,
      );
    });
    it('fetches erroneously data from an API', async () => {
      const errorMessage = 'Network Error';
  
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );
  
      await expect(getData()).rejects.toThrow(errorMessage);
    });
  });
});
