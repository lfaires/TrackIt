# 10º Projeto - Bootcamp Responde Aí: TrackIt 

## Criar um single page application para gerenciar hábitos

![Badge](https://img.shields.io/github/license/lfaires/Instagram)

### ✅ Requisitos

#### * Layout

- Aplicar layout, seguindo figma fornecido [aqui - TrackIt](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1)
- O CSS deve ser implementado utilizando **Styled Components**

#### * Tela Login `(rota /)`

- Deve ser enviado o email e senha para a API conforme documentação
- Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
- Em caso de sucesso, o usuário deve ser redirecionado para a rota `/hoje`
- Em caso de falha, deve ser exibido um alert informando para o usuário e os campos/botão devem ser habilitados novamente
- Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`

#### * Tela Cadastro `(rota /cadastro)`

- Os dados devem ser enviados para a API conforme documentação
- Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
- Em caso de sucesso, o usuário deve ser redirecionado para a rota `/`
- Em caso de falha, deve ser exibido um alert informando para o usuário e os campos/botão devem ser habilitados novamente
- Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/`

#### * Topo e Menu 

- Topo e menu devem ter posicionamento fixo
- No topo deve ser exibida a foto do usuário conforme layout

    **OBS**: Utilize ContextAPI para compartilhar o estado do usuário logado globalmente entre os componentes.

- No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
- O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário

    **OBS**: Esse progresso deve ser atualizado automaticamente conforme o usuário for concluindo os hábitos. Utilize ContextAPI para compartilhar esse estado globalmente entre os componentes.

#### * Tela hábitos `(rota /habitos)`

- Carregar os hábitos do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
- Ao clicar para deletar um hábito, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, deve ser enviado um request pra API conforme documentação e os hábitos recarregados logo em seguida.
- Caso o usuário não tenha nenhum hábito cadastrado, deve ser exibido o texto conforme layout
- Ao clicar no botão de "+", deve-se exibir um formulário de cadastro de hábito logo abaixo do título conforme layout
- O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito conforme layout
- Ao salvar, devem ser enviados os dados para API conforme documentação
- Enquanto estiver carregando, o campo de texto e o botão devem ser desabilitados, conforme layout. Os botões dos dias da semana devem ser desabilitados, porém não é necessária mudança visual durante o loading.
- Em caso de sucesso, os campos devem ser limpos e reabilitados, o formulário deve ser escondido novamente e a lista de hábitos abaixo recarregada
- Em caso de erro, os campos devem ser reabilitados e um alerta deve indicar o problema para o usuário
- Ao Cancelar, o formulário deve ser escondido. Caso tenha dados já preenchidos, os mesmos devem ser mantidos caso o usuário reabra o formulário de criação.

### Status do Projeto:

####  100% concluído

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

### Deploy:

https://projeto010-track-it.vercel.app/


### Autor
---

#### Feito por Luiz Aires 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@lfaires4-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/lfaires4)](https://twitter.com/lfaires4) 
[![Linkedin Badge](https://img.shields.io/badge/-Luiz_Fernando_Aires-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lfaires4/)](https://www.linkedin.com/in/lfaires4/) 
[![Gmail Badge](https://img.shields.io/badge/-lfaires@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lfaires@gmail.com)](mailto:lfaires@gmail.com)
