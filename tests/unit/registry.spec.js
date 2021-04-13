import { mount } from '@vue/test-utils'
import Registry from "@/components/Forms/Registry.vue";

describe('Registry.vue', () => {
    it('check Registry existence', () => {
        const wrapper = mount(Registry)
        expect(wrapper.is(Registry)).toBe(true)
    })
    it('check Registry form text', () => {
        const wrapper = mount(Registry)
        const email = wrapper.find('label')
        expect(email.text()).toMatch("Email:")
        const labels = wrapper.find('label')
        expect(labels.text()).toMatch("Email:")
        const button = wrapper.find('button')
        expect(button.text()).toMatch("Зареєструватись")
    })
    it('input check', () => {
        const wrapper = mount(Registry)
        const input = wrapper.find('input')
        expect(wrapper.classes()).toContain('p-5')
    })

})