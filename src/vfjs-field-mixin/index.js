import computed from './computed';
import emits from './emits';
import methods from './methods';
import props from './props';

const vfjsFieldMixin = {
  data() {
    return {
      vfjsInternalModel: undefined,
    };
  },
  computed,
  props,
  emits,
  methods,
  mounted() {
    this.vfjsFieldHelperAddListener(this.$el, 'blur');
  },
  beforeUnmount() {
    this.vfjsFieldHelperRemoveListener(this.$el, 'blur');
  },
};

export default vfjsFieldMixin;
