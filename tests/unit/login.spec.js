import { mount } from '@vue/test-utils'
import Login from "@/components/Forms/Login.vue";

describe('Login.vue', () => {
    it('check Login existence', () => {
        const wrapper = mount(Login)
        expect(wrapper.is(Login)).toBe(true)
    })
    it('check login form text', () => {
        const wrapper = mount(Login)
        expect(wrapper.text()).toMatch("Уже є акаунт?  Логін:  Пароль:  Вхід")
    })

    it('check login form text', () => {
        const wrapper = mount(Login)
        expect(wrapper.contains('div')).toBe(true)
    })
    it('contain classes', () => {
        const wrapper = mount(Login)
        expect(wrapper.classes()).toContain('login-bg')
        expect(wrapper.classes()).toContain('p-5')
    })

})