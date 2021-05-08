import textEllipsis from '@/directives/text-ellipsis';

const Directives = {
    install: function (Vue) {
        Vue.directive('ellipsis', textEllipsis);
    }
};
export default Directives;
