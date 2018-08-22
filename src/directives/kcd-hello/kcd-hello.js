export default ngModule => {
    if ( ON_TEST ) {
        require('./kc-hello.test').default(ngModule);
    }
    require('./kcd-hello.scss');
    // declare $log in array for production... if we don't use ng-annotate-loader
    ngModule.directive('kcdHello', ($log) => { 
        return {
            restrict: 'E',
            scope: {},
            // templateUrl: 'src/directives/kcd-hello.html',
            // template: require('./kcd-hello.html'),
            // Or using ES6 back tick feature
            template: ` 
                <div class="kcd-hello">
                    {{ vm.greeting }}
                </div>
            `,
            controllerAs: 'vm',
            controller: function() {
                const vm = this;                
                vm.greeting = 'Hello Webpack';
                $log.info('I have some info...');
            }
        };
    });
}