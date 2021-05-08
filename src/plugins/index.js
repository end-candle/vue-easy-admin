const requireContext = require.context('.', true, /\/(?!index).*\.js$/);

const Plugins = {
    install: function (Vue) {
        requireContext.keys().forEach((key) => {
            Vue.use(requireContext(key).default);
        });
    }
};
export default Plugins;
