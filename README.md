# APP EASYWALLET 💱

## PROJETO BACKEND

Já imaginou como funcionaria uma carteira digital "por baixo dos panos"? Então, eu também imaginei 😄.

Como uma forma de consolidar meus aprendizados com as tecnologias Sequelize ORM e MySQL, trabalhadas em conjunto com JavaScript e NodeJS, desenvolvi esse projeto que simula o backend de uma carteira digital, onde é possível acessar as rotas da aplicação, um banco de dados pré-definido, e simular transferências em $$ entre as pessoas usuárias. Tudo isso observando os padrões de arquitetura MVC e API RESTful. 

---
### SOBRE O PROJETO

Pensado para ser um modelo simplificado de conta digital que permite transações financeiras entre pessoas usuárias diferentes, algumas *regras de negócio* precisavam ser estabelecidas, a saber:

- Existem **2 tipos** diferentes de pessoa usuária: física e jurídica.
- Ambas são registradas no sistema e possuem informações em comum como: nome completo, email e senha. Porém, clientes pessoa física possuem CPF e clientes pessoa jurídica são identificados pelo CNPJ.
- Os dados CPF/CNPJ e emails devem ser únicos no sistema. 
- **Somente clientes pessoa física podem realizar a operação de transferência**. Lojistas (pessoa jurídica) podem receber transferências mas não estão aptos a enviar dinheiro.
- É preciso avaliar se há saldo disponível na conta da pessoa usuária sempre que ela iniciar uma transferência.
- Caso a transferência seja iniciada, deve-se simular um serviço de autorização externo para que a mesma seja liberada. Ou seja, essa simulação deve ocorrer antes da transferência ser finalizada.
   * Aqui, o serviço foi simulado através de uma requisição para [esse mock](https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6)
- A operação de transferência deve ser uma transação (ou seja, revertida em qualquer caso de inconsistência) e o dinheiro deve voltar para a carteira do usuário que envia.
- Ao receber o pagamento, a pessoa usuária precisa receber notificação (envio de email, sms) enviada por um serviço externo e, eventualmente, este serviço pode estar indisponível/instável.
   * Essa etapa foi simulada através de uma requisição a [esse mock](http://o4d9z.mocklab.io/notify)
- A realização das transferências deve ocorrer em uma rota `transaction` do tipo POST e ser semelhante ao modelo:

   ```bash
   {
    "value" : 100.00,
    "payer" : 4,
    "payee" : 15
   }
   ```

---
### ANTES DE COMEÇAR

É importante ter o `docker` e o `docker compose` instalados em sua máquina para ter acesso ao projeto. Veja os passos a seguir caso precise prosseguir com a instalação dessas ferramentas:

- Docker
    * Ir no site do Docker ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
    * Escolher o seu OS em: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
    * Seguir o passa-a-passo do último link.

- Docker Compose
    * Ir até `docker compose` no site do Docker ([https://docs.docker.com/compose/](https://docs.docker.com/compose/))
    * Para Linux, rodar o comando:

        ```bash
        sudo curl -L "[https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$](https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$)(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        ```

    * Dê as permissões de execução com o comando:

        `sudo chmod +x /usr/local/bin/docker-compose`

---
### INSTRUÇÕES PARA ACESSO:

1. Clone o repositório
  * `git clone https://github.com/loren-gt/app-easywallet.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd app-easywallet`

2. Utilize o comando abaixo para rodar o docker compose:
  * `docker-compose up`
