# FNX — instalação (versão independente, com sincronização)

Arquivos: `index.html`, `firebase-config.js`, `manifest.webmanifest`, `sw.js`, `firestore.rules`, pasta `icons/`, pasta `data/` (com o edital ATA-MF).
Você só precisa editar **um** arquivo: `firebase-config.js`.

## 1) Criar o projeto no Firebase (grátis)
1. Acesse https://console.firebase.google.com e entre com sua conta Google.
2. **Criar projeto** → nome `fnx` (pode desativar o Google Analytics).

## 2) Ativar o login
1. Menu **Build ▸ Authentication ▸ Começar**.
2. Aba **Sign-in method** → **E-mail/senha** → ativar → Salvar.

## 3) Criar o banco de dados
1. Menu **Build ▸ Firestore Database ▸ Criar banco de dados**.
2. Local: `southamerica-east1` (São Paulo). Modo: **produção**.
3. Aba **Regras** → apague tudo, cole o conteúdo do arquivo `firestore.rules` → **Publicar**.
   (Essas regras fazem cada usuário ler e gravar somente os próprios dados.)

## 4) Pegar a configuração do app
1. Engrenagem ⚙ ▸ **Configurações do projeto** ▸ role até **Seus apps** ▸ ícone **`</>` (Web)**.
2. Apelido `fnx` (não precisa marcar Hosting) → **Registrar app**.
3. Copie os valores de `firebaseConfig` e cole em `firebase-config.js`, no lugar dos textos de exemplo.

## 5) Publicar o site (escolha um)
**Netlify (mais rápido):** https://app.netlify.com/drop → arraste a **pasta inteira** `fnx-app`. Ele gera um link `https://algo.netlify.app`.

**GitHub Pages:** crie um repositório, envie todos os arquivos, e em Settings ▸ Pages escolha a branch `main` (pasta `/root`).

## 6) Liberar o domínio no login
No Firebase: **Authentication ▸ Settings ▸ Domínios autorizados ▸ Adicionar domínio** → coloque o domínio do seu site (ex.: `algo.netlify.app`).

## 7) Usar
1. Abra o link, toque em **Criar conta** (e-mail + senha de 6+ caracteres). Use a mesma conta no PC e no celular.
2. **Instalar no celular**
   - Android (Chrome): botão de ambiente (canto superior direito) ▸ **Instalar**, ou menu ⋮ ▸ *Instalar app*.
   - iPhone (Safari): **Compartilhar ▸ Adicionar à Tela de Início**.
3. Depois do primeiro acesso o app abre mesmo sem internet; o que você registrar sincroniza ao voltar a conexão.

## Observações
- A `apiKey` do Firebase não é segredo; quem protege seus dados são as regras do passo 3.
- Para atualizar o app depois: substitua os arquivos no site. O service worker pega a versão nova na próxima abertura com internet.
- Cada conta só enxerga os próprios dados. Se quiser impedir novos cadastros depois de criar a sua conta, procure em Authentication ▸ Settings a opção de desativar a criação de contas (*User actions*).
- Se deixar `firebase-config.js` com os textos de exemplo, o app funciona em modo local (sem login e sem sincronização).
