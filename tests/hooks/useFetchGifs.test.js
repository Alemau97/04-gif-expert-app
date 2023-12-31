import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 
   
    test('Debe regresar el estado inicial', () => { 
       
        const {result} = renderHook(() => useFetchGifs('Game of Thrones'));
        const {images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

        //const {images, isLoading} = useFetchGifs();

    });

    test('Debe retornar un arreglo de imágenes e isLoading en false', async() => { 
       
        const {result} = renderHook(() => useFetchGifs('Game of Thrones'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const {images, isLoading} = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

        //const {images, isLoading} = useFetchGifs();

    });

});