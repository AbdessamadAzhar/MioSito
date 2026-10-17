document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.btn');

    if (!downloadButton) {
        return;
    }

    downloadButton.addEventListener('click', (event) => {
        event.preventDefault();

        const link = document.createElement('a');
        link.href = 'CV.pdf';
        link.download = 'CV.pdf';
        link.click();
    });
});
