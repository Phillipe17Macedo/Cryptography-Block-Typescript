# Criptografia Simétrica com AES em TypeScript

Este projeto implementa criptografia e descriptografia de mensagens usando o algoritmo de criptografia simétrica AES (Advanced Encryption Standard) em TypeScript. O AES é um método de cifra por blocos amplamente utilizado para proteger dados, garantindo segurança e integridade.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação tipada que compila para JavaScript.
- **Node.js**: Ambiente de execução que permite rodar JavaScript e TypeScript no servidor.
- **AES (Advanced Encryption Standard)**: Algoritmo de criptografia simétrica usado para proteger as mensagens.

## Funcionalidades

- Criptografa uma mensagem de texto usando AES-256 em modo CBC.
- Descriptografa a mensagem cifrada de volta para o texto original.
- Permite que o usuário forneça uma mensagem personalizada ou utilize uma mensagem padrão.

## Estrutura do Projeto

- `index.ts`: Código principal que implementa a lógica de criptografia e descriptografia.
- `tsconfig.json`: Arquivo de configuração do TypeScript.
- `package.json`: Gerencia dependências e scripts do projeto.

## Como Executar o Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Phillipe17Macedo/Cryptography-Block-Typescript.git
   cd seu-repositorio
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Compile o Código TypeScript**

   ```bash
   npx tsc
   ```

4. **Execute o Código**

   ```bash
   node dist/index.js
   ```

   O programa solicitará que você digite uma mensagem para criptografar. Pressione Enter para usar a mensagem padrão ou insira uma mensagem personalizada.

## Exemplo de Uso

```bash
Digite uma mensagem para cifrar (ou pressione Enter para usar a mensagem padrão): Esta é uma mensagem secreta!

Mensagem Cifrada: <valor cifrado em hexadecimal>
Mensagem Decifrada: Esta é uma mensagem secreta!
```

## Dependências

- `crypto`: Módulo nativo do Node.js utilizado para operações de criptografia.
- `@types/node`: Fornece as definições de tipo para Node.js, garantindo compatibilidade com TypeScript.

## Como Funciona

1. **Geração de Chave e Vetor de Inicialização**: São gerados uma chave de 256 bits e um vetor de inicialização (IV) de 16 bytes, essenciais para a segurança da criptografia AES.
2. **Cifra e Decifra**: O texto é criptografado com AES em modo CBC (Cipher Block Chaining) e convertido para hexadecimal. A descriptografia recupera o texto original a partir do texto cifrado e do IV.

## Observações

- Esta implementação é destinada para estudos de criptografia simétrica em TypeScript e Node.js.
- AES-256 é uma criptografia segura, mas a chave e o IV devem ser protegidos em um ambiente real para garantir a segurança dos dados.

## Contribuição

Se quiser contribuir com melhorias, abra uma _issue_ ou faça um _fork_ e envie um _pull request_.

---

### Licença

Este projeto está sob a licença MIT.
