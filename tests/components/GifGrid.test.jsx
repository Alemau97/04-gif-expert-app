import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
   
    const category = 'Friends';

    test('Debe mostrar el loading incialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
       
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => { 
       
        const gifs = [
            {
                id: 'ABC',
                title: 'Taylor',
                url: 'https://localhost.taylor.jpg'
            },
            {
                id: 'ABCD',
                title: 'Taylor S',
                url: 'https://localhost.taylors.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});