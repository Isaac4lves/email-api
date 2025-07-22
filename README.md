# NEWSLETTER API

## SOBRE A API
Foi feita para estudo, usando Next.js, TypeScript e Nodemailer. Pode ser facilmente incoporada no seu projeto com Next, **feita para enviar E-mails usando o serviço SMTP do Gmail**. 

## REQUISITOS
**Explicarei o uso de cada em [PRIMERIOS PASSOS](#primeiros-passos)**
* Node v18+
* npm v9+
* Conta no Email (com verificação de duas etapas ativa)
* "Senha de APP" para sua conta Google


## PRIMEIROS PASSOS

1. **Ative a verificação em duas etapas** na conta Google que será usada como remetente.
2. **Gere uma senha de app**:
    - Acesse [https://myaccount.google.com/security](https://myaccount.google.com/security)
    - Em "Login no Google", clique em **"Senhas de app"**
    - Gere uma nova senha para esta aplicação

        > O Google exige essa senha porque o uso do SMTP por apps de terceiros é considerado sensível. A senha de app é uma alternativa segura.

3. Clone este repositório:

    ```bash
    git clone https://github.com/Isaac4lves/email-api.git
    cd email-api
    ```


4. Crie um arquivo `.env` com as seguintes variáveis:

    ```env
    EMAIL=seuemail@gmail.com
    PASS=suasenhadeapp
    ```

5. Instale as dependências e inicie o servidor:

    ```bash
    npm install
    npm run dev
    ```

6. Envie uma requisição `POST` para a API (usando cURL, Postman etc.)

    * Exemplo usando cURL
    ```bash
    curl -X POST http://localhost:3000/api/send-mail \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Destinatario",
        "email": "emaildodestinatario@gmail.com",
        "message": "Mensagem simples",
        "htmlContent": "<h1>Olá!</h1><p>Essa é uma <strong>mensagem enviada com</strong> nodemailer.</p>"
    }'
    ```

    * Mensagem experada

    ```
    {
    "message": "Email enviado com sucesso!"
    }
    ```