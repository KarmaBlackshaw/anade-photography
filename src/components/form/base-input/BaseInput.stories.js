import BaseInput from './BaseInput.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/BaseInput',
  component: BaseInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      control: 'boolean'
    },
    isLoading: {
      control: 'boolean'
    },
    type: {
      control: {
        type: 'select'
      },
      options: ['text', 'number', 'date', 'email', 'password']
    }
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  components: { BaseInput },
  setup () {
    return { args }
  },

  template: '<BaseInput v-bind="args">{{args.label}}</BaseInput>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Label',
  placeholder: 'Sample placeholder'
}
