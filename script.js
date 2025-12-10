// JavaScript para o botão de Copiar Código
document.getElementById('copyCodeBtn').addEventListener('click', function() {
    // Pega apenas o texto dentro do <code>, removendo a indentação extra
    const codeBlock = document.getElementById('codeBlock').textContent.trim();
    
    // Função de fallback para copiar o texto (se a API do Clipboard não estiver disponível)
    function fallbackCopyTextToClipboard(text, buttonElement) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; 
        textArea.style.opacity = "0"; 
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            buttonElement.textContent = 'Copiado!';
            setTimeout(() => {
                buttonElement.textContent = 'Copiar Código';
            }, 2000);
        } catch (err) {
            console.error('Falha ao tentar copiar o texto', err);
            buttonElement.textContent = 'Erro ao Copiar!';
            setTimeout(() => {
                buttonElement.textContent = 'Copiar Código';
            }, 2000);
        }
        document.body.removeChild(textArea);
    }
    
    // Tenta usar a API do Clipboard moderna
    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeBlock).then(() => {
            this.textContent = 'Copiado!';
            setTimeout(() => {
                this.textContent = 'Copiar Código';
            }, 2000);
        }).catch(err => {
            fallbackCopyTextToClipboard(codeBlock, this);
        });
    } else {
       
        fallbackCopyTextToClipboard(codeBlock, this);
    }
});


