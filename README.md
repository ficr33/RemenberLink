# RemenberLink

<b>Para construção desse sistema, faremos uso do GITFLOW, para gerenciamento de versão<b>

## Como funciona o GitFlow

O gitflow consiste na separação ordenada das branchs em que estaremos trabalhando. Para melhor compreensão, segue detalhe das nomenclatura de cada branch e suas utilidades:

* Master ( Esta branch só pode receber todas alterações quando TODAS implementaçõs estiverem finalizadas e o sistema esteja pronto para PRODUÇÃO. Em suma, aqui ficará o SISTEMA DE PRODUÇÃO )
* Develop ( Esta branch deve ser atualizada de acordo com a finalização de cada Feature que o colaborador for finalizando suas atividades. A develop subsiste durante todo o desenvolvimento do sistema até o final de todas implementações.)
* Feature ( É esta branch que o colaborador deve criar para implementar funcionalidades no sistema, sempre que o mesmo estiver com alguma atividade - Ex: Criar Rotas, deverá criar uma branch com a seguinte nomenclatura: feature/criar_rotas .... E, após a criação das rotas, o colaborador deve dar o commit e lançar as alterações para o REMOTO, após isto, integrar com a develop )
* HotFix ( Esta branch é utilizada SOMENTE quando há a necessidade de correção em PRODUÇÃO. Quando existir a necessidade, o colaborador deverá abrir uma branch com a seguinte nomenclatura: hotfix/CORREÇÃO_DO_BUG. )

<b>Observação: NUNCA DÊ COMMIT DIRETO NA DEVELOP NEM NA MASTER<b>


## Para iniciar o projeto localmente

  * O primeiro passo é utilizar o seguinte comando: GIT CLONE ( URL DO PROJETO )

  * O segundo passo é criar sua branch ( GIT CHECKOUT -B FEATURE/..... ) Sempre é bom utilizar o GIT CHECKOUT -B porque é realizado duas atividades ao mesmo tempo, as quais são: Criação da branch e acesso imediato à ela.

  * O terceiro passo é rodar o comando: YARN INSTALL ( Para baixar TODAS DEPENDÊNCIAS DO PROJETO )
  
  * O quarto passo é começar a codar !
