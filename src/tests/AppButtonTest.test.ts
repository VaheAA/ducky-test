import { mount } from '@vue/test-utils'
import AppButton from '@/components/app/AppButton.vue'
import { describe, expect, it } from 'vitest'

describe('AppButton', () => {
  const mockStyle = {
    button: 'button_hashed_class',
    primary: 'primary_hashed_class',
    secondary: 'secondary_hashed_class',
  }

  it('renders the button with the correct label', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Click Me',
      },
    })

    expect(wrapper.text()).toContain('Click Me')
  })

  it('applies the correct variant class', () => {
    const wrapper = mount(AppButton, {
      props: {
        variant: 'secondary',
      },
      global: {
        mocks: {
          $style: mockStyle,
        },
      },
    })

    expect(wrapper.classes()).toContain(mockStyle.secondary)
  })

  it('sets the correct button type', () => {
    const wrapper = mount(AppButton, {
      props: {
        type: 'submit',
      },
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('renders default variant if no variant is provided', () => {
    const wrapper = mount(AppButton, {
      global: {
        mocks: {
          $style: mockStyle,
        },
      },
    })

    expect(wrapper.classes()).toContain(mockStyle.primary)
  })

  it('renders slot content', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'With Slot',
      },
      slots: {
        icon: '<span class="icon">Icon</span>',
      },
    })

    expect(wrapper.html()).toContain('<span class="icon">Icon</span>')
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(AppButton, {
      global: {
        mocks: {
          $style: mockStyle,
        },
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('inner-click')).toBeTruthy()
    expect(wrapper.emitted('inner-click')!.length).toBe(1)
  })
})
