import kcdHelloDirective from './kcd-hello/kcd-hello';

export default ngModule => {
    kcdHelloDirective(ngModule);
    // require('./kcd-hello/kcd-hello').default(ngModule);
};