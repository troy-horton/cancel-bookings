'use strict';

import cancel from '../src/read-itin-file';

describe('cancel request',() =>{
    describe('#cancel fail', ()=> {
        it('does stuff', () => {
            cancel('ABCDEF')
            expect(callback.statusCode).to.be.equal(404);
        });
    })

})