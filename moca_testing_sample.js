
// MOCA - General-purpose testing framework.
// 3 basic functions to understand:
    // it: run a test and make an assertion.
    // describe: Groups together 'it' functions.
    // beforeEach: Execute some general setup code.2ay63f

    class Car {
        park() {
            return 'stopped';
        }
        drive() {
            return 'vrooom'
        }
    }
    
    let car;
    beforeEach(() => {
        console.log('before eachh')
        car = new Car();
    });
    // describe -> as explained above, describe groups 'it' functions
    describe('Car Class', () => { // First arg is just an overall description. Could be just 'Car'
        it('can park', () => {  // type of test -> It , and a description of test
            assert.equal(car.park(), 'stopped'); // (value that produces our code, and expected result)
        });
        it('can drive', () => {  // type of test -> It , and a description of test
            assert.equal(car.drive(), 'vrooom'); // (value that produces our code, and expected result)
        })
    })
    // npm run test