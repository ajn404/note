import html2canvas from 'html2canvas';

export const downloadBase64File = (base64Data:any, filename:any) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = base64Data;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
