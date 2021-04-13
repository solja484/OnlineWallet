import { mount } from '@vue/test-utils'
import Secure from "@/views/Secure.vue";

describe('Secure.vue', () => {
    it('check Secure existence', () => {
        const wrapper = mount(Secure)
        expect(wrapper.is(Secure)).toBe(true)
    })
    it('check data', () => {
        const wrapper = mount(Secure)
        expect(wrapper.text()).toMatch("This page is protected by auth")
    })

    it('contains elements', () => {
        const wrapper = mount(Secure)
        expect(wrapper.contains('div')).toBe(true)
        expect(wrapper.contains('h1')).toBe(true)
    })


})