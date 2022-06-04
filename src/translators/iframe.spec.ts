/**
 * @fileoverview IFrame element translator test
 */

//Imports
import test from 'ava';
import translator from './iframe';
import { options } from '../utils';
import { parse, HTMLElement } from 'node-html-parser';

//Data
const src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

test('translate iframes', ctx => {
    for (const rawTag of translator.tags) {
        //Format tag
        const tag = rawTag.toLowerCase();

        // Generate raw HTML
        const raw = `<${tag} src="${src}"></${tag}>`;

        // Parse
        const html = parse(raw, options).childNodes[0] as HTMLElement;

        // Translate
        const { markdown } = translator.translate(html);

        // Assert
        ctx.is(markdown, src);
    }
});