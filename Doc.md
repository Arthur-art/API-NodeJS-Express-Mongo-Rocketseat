# Configurando o ambiente
- yarn add express
- yarn add body-parser

# Instalando mongodb
- Criando pasta dabase no src
- instalando mongodb 
    - https://docs.mongodb.com/manual/installation/
- 1 Iniciando Mongodb 
    - sudo systemctl start mongod
- 2 Verifique se o MongoDB foi iniciado com sucesso. 

sudo systemctl status mongod

Você pode opcionalmente garantir que o MongoDB iniciará após uma reinicialização do sistema, emitindo o seguinte comando:

sudo systemctl enable mongod

- 2
Pare o MongoDB. 
Conforme necessário, você pode interromper o mongodprocesso emitindo o seguinte comando:

sudo systemctl stop mongod

- 3
Reinicie o MongoDB. 
Você pode reiniciar o mongodprocesso emitindo o seguinte comando:

sudo systemctl restart mongod

# Instalando mongoose para o node se conectar com o mongo
- yarn add mongoose

# Criando tabela de Usuarios na pasta models/user.js

# Criando rota dentro da pasta controller para autentificacao do usuario
- Criando usuario utilizando o Postman com a seguinte query no body da requisição do tipo POST:

{
    "name":"Ivar6",
    "email":"ivar@gmail6.com",
    "password":"1234566"
}

# Adicionando lib bcryptjs para criptografar a senha
- yarn add bcryptjs

# Utilizando pacote jsonwebtoken para criar um token apos validar a senha do usuario
- yarn add jsonwebtoken

# Criando arquivo auth.json na pasta config para trabalhar com token do jsonwebtoken

# Trabalhando com middlewares para validar token de usuario

# Adicionando modules fs e path 
- fs para trabalhar com file system do node e path para trabalhar com caminhos
- yarn add fs path
- Criando metodo no index.js do controller para que todos os controllers agora sejam automaticamente 
adicionados ao index do projeto

# Implementando mailtrap para realizar testes de envio de email 
- https://mailtrap.io/ 
    - npm install nodemailer

# Instalando module para trabalhar com templates de email
- npm install nodemailer-express-handlebars

# Criando rota no authController para envio de email afim de recuperar a senha

# Adicionando novas colunas na model user para salvar token de recuperar senha
- Nota: 
    - No mongodb não é necessário rodar as migrations;

# Criando rota de reset de senha utilizando token do usuario

# Criando models project e task

# 