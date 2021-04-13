import { mount } from '@vue/test-utils'
import EditInfo from "@/components/Forms/EditInfo.vue";

describe('EditInfo.vue', () => {
    it('check EditInfo existence', () => {
        const wrapper = mount(EditInfo)
        expect(wrapper.is(EditInfo)).toBe(true)
    })
    it('check editinfo form text', () => {
        const wrapper = mount(EditInfo)
        const labels = wrapper.find('label')
        expect(labels.text()).toMatch("Ім'я користувача")
        const button = wrapper.find('button')
        expect(button.text()).toMatch("Зберегти")
    })
    it('triggers', () => {
        const wrapper = mount(EditInfo)
        wrapper.trigger('click').then(() => {
            expect(wrapper.text()).toContain('updated')
        })
    })
    it('contain classes', () => {
        const wrapper = mount(EditInfo)
        expect(wrapper.classes()).toContain('px-2')
        expect(wrapper.classes()).toContain('login-bg')
        expect(wrapper.classes()).toContain('py-4')
    })

})