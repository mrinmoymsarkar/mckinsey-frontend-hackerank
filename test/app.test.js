import {fireEvent, getByTestId} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import jsdom, {JSDOM} from 'jsdom'
import path from 'path'

const BASE = path.resolve(__dirname, '../src');

let virtualConsole
let dom
let container
let input
let button
let list

const addInput = (text) => {
    fireEvent.input(input, {
        target: {value: text}
    })
    fireEvent.change(input, {
        target: {value: text}
    })
}

const getComputedStyle = (node) => {
    return dom.window.getComputedStyle(node, null)
}

const loadDom = (dom) => {
    return new Promise((resolve, _) => {
        virtualConsole.on("log", log => {
            if (log === "DOM Loaded") resolve(dom)
        })
    })
}

describe('List View', () => {
    beforeEach(async () => {
        virtualConsole = new jsdom.VirtualConsole();
        dom = await JSDOM.fromFile(BASE + '/index.html', {
            runScripts: 'dangerously',
            resources: 'usable',
            pretendToBeVisual: true,
            virtualConsole
        })
        await loadDom(dom)
        container = dom.window.document.body;
        button = getByTestId(container, 'button');
        input = getByTestId(container, 'input');
    })

    it('should show alert message "Please provide the valid input" for the invalid or empty input after clicking on Insert button', () => {
        const alertBox = getByTestId(container, 'alert');
        let computed = getComputedStyle(alertBox);
        expect(computed.getPropertyValue('display')).toEqual('none');
        addInput('');
        fireEvent.click(button);
        list = getByTestId(container, 'list');
        expect(list.children.length).toEqual(0);
        computed = getComputedStyle(alertBox);
        expect(computed.getPropertyValue('display')).not.toEqual('none');
    })

    it('should add the valid input to the list after clicking on Insert button', () => {
        addInput("USA")
        fireEvent.click(button);
        list = getByTestId(container, 'list');
        expect(list.children.length).toEqual(1)
    })

    it('should reset the input after inserting the value successfully', () => {
        addInput("USA")
        fireEvent.click(button);
        list = getByTestId(container, 'list');
        expect(list.children.length).toEqual(1)
        expect(input.value).toEqual('')
    })

    it('font color should be red for every third elements (3, 6 and 9 etc) in the list', () => {
        addInput("India")
        fireEvent.click(button);
        addInput("France")
        fireEvent.click(button);
        addInput("Spain")
        fireEvent.click(button);

        list = getByTestId(container, 'list');

        const computed = getComputedStyle(list.children[2]);
        expect(['red', 'rgba(255, 0, 0, 1)', 'rgb(255, 0, 0)']).toContain(computed.getPropertyValue('color'));
    })

    it('font color should be black for any not third elements (3, 6 and 9 etc) in the list', () => {
        addInput("India")
        fireEvent.click(button);
        addInput("France")
        fireEvent.click(button);
        addInput("Spain")
        fireEvent.click(button);

        list = getByTestId(container, 'list');

        [0, 1].forEach(index => {
            const computed = getComputedStyle(list.children[index]);
            expect(['', undefined, 'black', 'rgba(0, 0, 0, 1)', 'rgb(0, 0, 0)']).toContain(computed.getPropertyValue('color'));
        })
    })
})
