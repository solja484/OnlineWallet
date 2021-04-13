import { mount } from '@vue/test-utils'
import ChangePassword from "@/components/Forms/ChangePassword.vue";

describe('ChangePassword.vue', () => {
    it('check Login existence', () => {
        const wrapper = mount(ChangePassword)
        expect(wrapper.is(ChangePassword)).toBe(true)
    })
    it('check password form text', () => {
        const wrapper = mount(ChangePassword)
        expect(wrapper.text()!= null)
    })
    it('check changepassword form text', () => {
        const wrapper = mount(ChangePassword   )
        expect(wrapper.contains('div')).toBe(true)
        expect(wrapper.contains('form')).toBe(true)
    })
    it('contain classes', () => {
        const wrapper = mount(ChangePassword)
        expect(wrapper.classes()).toContain('px-2')
        expect(wrapper.classes()).toContain('login-bg')
        expect(wrapper.classes()).toContain('py-3')
    })
    it('contain button', () => {
        const wrapper = mount(ChangePassword)
        const button = wrapper.find('button')
        expect(button.text()).toMatch("Змінити пароль")
        })
})