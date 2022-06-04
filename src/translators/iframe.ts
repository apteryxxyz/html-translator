/**
 * @fileoverview IFrame element translator
 */

//Imports
import { Translator } from '../types';

// Export
export default {
    inline: false,
    tags: ['IFRAME'],
    translate: (element) => {
        if (!element.hasAttribute('src')) {
            throw new Error('IFrame element must provide source (src)!');
        }

        // Get the source
        const src = element.getAttribute('src')!;

        return {
            markdown: `[IFrame Embed](${src})`,
        };
    },
} as Translator;
