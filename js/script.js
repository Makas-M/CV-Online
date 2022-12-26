
//dados de entrada que o usuario digitou
var maintable = document.getElementById('maintable'),
//botao de baixar pdf
pdfout = document.getElementById('pdfout');
//acesso a foto e ao inputo do usuratio
let foto = document.getElementById('imgFoto');
let file = document.getElementById('flFoto');
//abrir o input ao clicar na foto
foto.addEventListener('click', ()=>{file.click();});
//
file.addEventListener('change', (event)=>{
    let ler = new FileReader();
    ler.onload = () => {
        foto.src = ler.result;
    }
ler.readAsDataURL(file.files[0]);
})

//funcionalidade para quando o usuario clicar o botao de baixar pdf 
pdfout.onclick = function () {






    var doc = new jsPDF('p', 'pt', 'A4');
    
    var margin = 40;
    var scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
    var scale_mobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();

    //condicao para quando estiver a ser aberto em um telefone
    if (/android|webOS|iPhone|iPad|iPod|BalckBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //mobile
        doc.html(maintable,
            {
                x: margin,
                y: margin,
                html2canvas: {
                    scale: scale_mobile,
                },
                callback: function (doc) {
                    doc.output('dataurlnewwindow', { filename: 'cv.pdf' });

                }
            });
    } else {
        //condicao para quando estiver a ser aberto em um PC
        doc.html(maintable,
            {
                x: margin,
                y: margin,
                html2canvas: {
                    scale: scale,
                },
                callback: function (doc) {
                    doc.output('dataurlnewwindow', { filename: 'cv.pdf' });

                }
            });

    }
}
