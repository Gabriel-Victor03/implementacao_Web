# Projeto de Hospedagem Web com Docker e Vagrant

Este projeto tem como objetivo o planejamento e instalação de um servidor de hospedagem para rodar uma aplicação web simples, simulando a tela de pesquisa do Google Chrome. O ambiente foi configurado usando Vagrant para provisionamento e Docker para a execução dos containers.

## Requisitos

Antes de executar este projeto, você precisará ter algumas ferramentas instaladas no seu sistema:

### Configuração de Ambiente
#### Sugestão de Hardware e requisitos mínimos

- **Placa-Mãe:**
   `Modelo`: ASUS PRIME H610M
   `Valor`: R$577,99
   `Justificativa`: Compatível com processadores modernos de baixo custo e eficiente para tarefas de servidor.

- **Processador:**
   `Modelo`: Intel Core i3-12100
   `Valor`: R$786,99
   `Justificativa`: Possui bom desempenho em operações de API e são eficientes em consumo de energia.

- **Memória RAM:**
   `Modelo`: Memória 8GB DDR4
   `Valor`: R$179,99
   `Justificativa`: Suficiente para a maioria dos servidores que executam APIs leves e pequenos bancos de dados.

- **Armazenamento:**
   `Modelo`: SSD 256GB, M.2 PCIe NVMe
   `Valor`: R$191,99
   `Justificativa`: Alta velocidade de leitura/gravação, resultando em menor latência no servidor. Armazenamento suficiente para suportar o sistema operacional e a aplicação web sem necessidade de banco de dados.

- **Fonte de Alimentação:**
   `Modelo`: Fonte Duex DX 500, 500W, 80 Plus Bronze
   `Valor`: R$179,99
   `Justificativa`: Capacidade mais que o suficiente para os componentes e garantia de eficiência energética.


- **Memória RAM:**
   `Modelo`: Memória 8GB DDR4
   `Valor`: R$179,99
   `Justificativa`: Capacidade mais que o suficiente para os componentes e garantia de eficiência energética.

- **Gabinete:**
   `Modelo`: Office, Mini-Tower
   `Valor`: R$99,99
   `Justificativa`: Compacto e adequado para o hardware sugerido.

- **Roteador:**
   `Modelo`: TP-Link Archer C6
   `Valor`: R$200,00

### Softwares Necessárias

1. **Vagrant** - Para provisionar o ambiente virtualizado.
   - [Baixar o Vagrant](https://www.vagrantup.com/downloads)
   
2. **VirtualBox** - Para criar a máquina virtual onde o Vagrant irá provisionar o servidor.
   - [Baixar o VirtualBox](https://www.virtualbox.org/wiki/Downloads)

3. **Docker** - Para executar as aplicações em containers.
   - [Baixar o Docker](https://www.docker.com/get-started)

4. **Git** - Para clonar o repositório.
   - [Baixar o Git](https://git-scm.com/)

## Passos para Rodar o Projeto

Siga os passos abaixo para rodar o ambiente até o ponto atual, onde já temos uma máquina virtual provisionada com Docker e a aplicação web configurada.

### 1. Clonar o Repositório

Primeiro, clone o repositório para o seu ambiente local:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Iniciar a Máquina Virtual com o Vagrant

Execute o comando abaixo para iniciar a máquina virtual com o Vagrant:

```
vagrant up
```
## 
