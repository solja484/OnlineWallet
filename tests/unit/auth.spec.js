import { mount } from '@vue/test-utils'
import Auth from "@/views/Auth.vue";

describe('Auth.vue', () => {
    it('check Auth existence', () => {
        const wrapper = mount(Auth)
        expect(wrapper.is(Auth)).toBe(true)
    })
    it('check data', () => {
        const wrapper = mount(Auth)
        expect(wrapper.text()).toMatch("Зв'язатися з нами:")
    })

    it('contains elements', () => {
        const wrapper = mount(Auth)
        expect(wrapper.contains('div')).toBe(true)
        expect(wrapper.contains('span')).toBe(true)
    })


})