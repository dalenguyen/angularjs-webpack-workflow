export default ngModule => {
    describe(`kcd-hello`, () => {
        beforeEach(window.module(ngModule.name));

        it(`should test property`, () => {
            expect(true).to.be.true;
        });
    });
}