//Pruebas de la funciones api
import {
    existPath,
    validateAbsolutePath
} from '../src/api.js';

  describe('existPath', () => {
    it('is a function', () => {
      //console.log('FIX ME!');
      expect(typeof existPath).toBe('function');
    });
  });

  describe('validateAbsolutePath', () => {
    it('is a function', () => {
      //console.log('FIX ME!');
      expect(typeof validateAbsolutePath).toBe('function');
    });
  });



