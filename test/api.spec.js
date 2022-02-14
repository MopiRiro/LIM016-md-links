/* eslint-disable no-undef */
//Pruebas de la funciones api
import {
  existPath,
  validateAbsolutePath,
  convertAbsolutePath,
  directoryPath,
  filePath,
  mdExtension,
  readFilePath,
  filesExtensionMdPath,
  getLinksWithProperties,
  getLinkStatus,
  checkIfItHasLinks,
} from '../src/api.js';

const routeRelativeTest = './pruebas';
const routeAbsoluteTest = 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas';
const routeTestFail = './pruebas/...';
const routeFileTest = 'D:/LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas/prueba.md'
const arrayFilesMd = [
  'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\prueba.md',
  'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md',
  'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subSubPrueba\\subSubPrueba.md'
];

const arrayGetLinksWithProperties = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md'
  },
  {
    href: 'https://github.com/error404omg',
    text: 'the Node.js in Git Hub.',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subPrueba.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subSubPrueba\\subSubPrueba.md'     
  },
  {
    href: 'https://www.neoguias.com/como-eliminar-duplicados-array-javascript/#Elimina_objetos_duplicados',
    text: 'Eiminar-objetosDuplicados-array',
    file: 'D:\\LABORATORIA\\PROYECTOS\\PROYECTO4\\LIM016-md-links\\pruebas\\subPrueba\\subSubPrueba\\subSubPrueba.md'     
  }
];


  describe('existPath', () => {
    it('is a function', () => {
      expect(existPath(routeRelativeTest)).toBe(true);
      expect(existPath(routeTestFail)).toBe(false);
    });
  });

  describe('validateAbsolutePath', () => {
    it('is a function', () => {
      expect(validateAbsolutePath(routeRelativeTest)).toBe(false);
      expect(validateAbsolutePath(routeAbsoluteTest)).toBe(true);
    });
  });

  describe('convertAbsolutePath', () => {
    it('is a function', () => {
      expect(convertAbsolutePath(routeRelativeTest)).toBe(routeAbsoluteTest);
      expect(convertAbsolutePath(routeAbsoluteTest)).toBe(routeAbsoluteTest);

    });
  });

  describe('directoryPath', () => {
    it('is a function', () => {
      expect(directoryPath(routeAbsoluteTest)).toBe(true);
      expect(directoryPath(routeFileTest)).toBe(false);
    });
  });

  describe('filePath', () => {
    it('is a function', () => {
      expect(filePath(routeFileTest)).toBe(true);
      expect(filePath(routeAbsoluteTest)).toBe(false);
    });
  });

  describe('mdExtension', () => {
    it('is a function', () => {
      expect(mdExtension(routeFileTest)).toBe(true);
    });
  });

  describe('readFilePath', () => {
    it('is a function', () => {
      expect(readFilePath(routeFileTest)).toContain('hello yes it works');
    });
  });

  describe('filesExtensionMdPath', () => {
    it('is a function', () => {
      expect(filesExtensionMdPath(routeRelativeTest)).toEqual(arrayFilesMd);
    });
  });

  describe('getLinksWithProperties', () => {
    it('is a function', () => {
      expect(getLinksWithProperties(routeRelativeTest)).toEqual(arrayGetLinksWithProperties);
    });
  });


  
/*-----TEST CON MOCKEO ---- */
