# APP EASYWALLET 

## PROJETO BACKEND

Já imaginou como funcionaria uma carteira digital "por baixo dos panos"? Então, eu também imaginei. Esse projeto foi desenvolvido como uma maneira de tornar didático o aprendizado de tecnologias como ORM, Sequelize e MySQL, trabalhadas aqui em conjunto com JavaScript, Docker e NodeJS.

---
### ANTES DE COMEÇAR

É importante ter o docker e o docker compose instalados em sua máquina para ter acesso ao projeto. Veja os passos a seguir caso precise prosseguir com a instalação dessas ferramentas:

- Docker
    * Ir no site do Docker ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
    * Escolher o seu OS em: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
    * Seguir o passa-a-passo do último link.

- Docker Compose
    * Ir até docker compose no site do Docker ([https://docs.docker.com/compose/](https://docs.docker.com/compose/))
    * Para Linux, rodar o comando:

        ```bash
        sudo curl -L "[https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$](https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$)(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        ```

    3. Dê as permissões de execução com o comando:

        `sudo chmod +x /usr/local/bin/docker-compose`

---
### INSTRUÇÕES PARA ACESSO:

1. Clone o repositório
  * `git clone https://github.com/loren-gt/app-easywallet.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd app-easywallet`

2. Instale as dependências
  * `npm install`

3. Utilize o comando abaixo para rodar o banco:
  * `docker-compose up`
