
import { NavbarGroup } from 'vuepress';
const kaboomUr: string = '/markdown/kaboom/'

export const kaboom: NavbarGroup = {
    text: 'kaboom',
    children: [
        {
            text: 'dialog',
            link: `${kaboomUr}dialog`
        },
        {
            text: 'bird',
            link: `${kaboomUr}bird`
        },
        {
            text: 'Dinosaur',
            link: `${kaboomUr}Dinosaur`
        }
    ]
}
export { Dinosaur } from './Dinosaur'
export { dialog } from './dialog'
export { bird } from './floppyBird'