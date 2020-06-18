import Quill from 'quill'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const quill = new Quill(`#editor`, {
    theme: `snow`,
    debug: `error`,
    placeholder: `Enter content`,
    formats: [`bold`, `italic`, `link`, `underline`, `script`, `align`, `image`],
    modules: {
        toolbar: [
            [`bold`, `italic`, `underline`],
            [`link`, `script`],
            [`image`]
        ]
    }
});

const outputDiv = document.querySelector(`#output`);
quill.on(`text-change`, (delta, oldDelta, source) => {
    let html = new QuillDeltaToHtmlConverter(quill.getContents().ops, {
        inlineStyles: true,
        multiLineParagraph: false
    }).convert();

    outputDiv.innerHTML = html;
});