const Runway = require('./Runway')

describe('Runway classs: ', () => {
    it('has max planes set to 100: ', () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    })

    it('can be initialized with a name parameter', () => {
        runway = new Runway('name');
        expect(runway).toBeInstanceOf(Runway)
    })

    it('allows to add planes to the runway', () => {
        runway.add('plane')
        expect(Runway.planes.length).toBe(1)
    })

    it('prevents you to add planes when at max capacity', () => {
        for(let i = 0; i<99; i++){
            runway.add(`plane${i}`)
        }
        expect(() => {
            runway.add('plane')
        }).toThrowError('runways at full capacity!')
    })

    it('allows you to remove planes form runway', () => {
        runway.remove('plane')
        expect(Runway.planes.length).toBe(99)
    })
    it('prevents you from remving planes if the array is empty', () => {
        Runway.planes = []
        expect(() => {
            runway.remove('plane')
        }).toThrowError('runway is empty!')
    })

})
