describe('Test para la función lanzarDado()', () => {
    it('Tras 1000 lanzamientos la función debería devolver un número', () => {
        for (let i = 0; i < 1000; i++) {
                expect(lanzarDado()).toBeInstanceOf(Number);
        }
    });

    it('Tras 1000 lanzamientos la función siempre debe devolver un número mayor o igual que 1', () => {
        for (let i = 0; i < 1000; i++) {
            expect(lanzarDado()).toBeGreaterThanOrEqual(1);
        }
    });

    it('Tras 1000 lanzamientos la función debería devolver un número menor o igual que 6', () => {
        for (let i = 0; i < 1000; i++) {
            expect(lanzarDado()).toBeLessThanOrEqual(6);
        }
    });
});

describe('Tras 1000 lanzamientos la función debería haber devuelto todos los números comprendidos entre 1 y 6', () => {
    // Array relleno de ceros donde en cada índice meteré las veces que sale una cara.
    // Lo dejo vacio en la primera posición para que se me haga más fácil 
    // iterar, usando de rango 1-6 como indice.
    let caras = [, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 1000; i++) {
        switch (lanzarDado()) {
            case 1:
                caras[1]++;
                break;
            case 2:
                caras[2]++;
                break;
            case 3:
                caras[3]++;
                break;
            case 4:
                caras[4]++;
                break;
            case 5:
                caras[5]++;
                break;
            case 6:
                caras[6]++;
                break;
            default:
                throw new Error("La función ha dado fuera del rango");
        }
    }
    for (let i = 1; i < 7; i++) {
        it(`Nº de veces que la función ha devuelto ${i}: ${caras[i]} (debería de ser mayor a cero)`, () => {
            expect(caras[i]).toBeGreaterThan(i);
        });
    }
});
describe('Test de probabilidad de salir entre caras. Tras 100000 lanzamientos la probabilidad con la que debería aparecer cada cara es de ⅙ con un margen del +-5%', () => {
    // Array relleno de ceros donde en cada índice meteré las veces que sale una cara.
    // Lo dejo vacio en la primera posición para que se me haga más fácil 
    // iterar, usando de rango 1-6 como indice.
    let caras = [, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 100000; i++) {
        switch (lanzarDado()) {
            case 1:
                caras[1]++;
                break;
            case 2:
                caras[2]++;
                break;
            case 3:
                caras[3]++;
                break;
            case 4:
                caras[4]++;
                break;
            case 5:
                caras[5]++;
                break;
            case 6:
                caras[6]++;
                break;
            default:
                throw new Error("La función ha dado fuera del rango");
        }
    }
    
    let margen = [((100000 / 6) * 0.95), ((100000 / 6) * 1.05)];
    for (let i = 1; i < 7; i++) {
        it(`Test de la cara ${i}: Nº de tiradas = ${caras[i]}, siendo el margen entre ${Math.round(margen[0])} - ${Math.round(margen[1])}`, () => {
            expect(caras[i]).toBeGreaterThan(margen[0]);
            expect(caras[i]).toBeLessThan(margen[1]);
        });
    }
});