# Projeto de Hospedagem Web com Docker e Vagrant

Este projeto tem como objetivo o planejamento e instalação de um servidor de hospedagem para rodar uma aplicação web simples, simulando a tela de pesquisa do Google Chrome. O ambiente foi configurado usando Vagrant para provisionamento e Docker para a execução dos containers.

## Requisitos

Antes de executar este projeto, você precisará ter algumas ferramentas instaladas no seu sistema:

### Ferramentas Necessárias

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
