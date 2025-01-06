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
## Provisionamento Automatizado:
- Instalação de pacotes básicos e utilitários (rcconf, nmap).
- Configuração do Docker e Docker Compose:
- Repositório oficial adicionado.

## Serviços e Regras Implementadas nos Containers
- Nginx:
   - `Proxy reverso`: Redireciona requisições recebidas na porta 80 para o serviço da aplicação no app-container (porta 3000).
- Docker:
   - Configurada como uma rede do tipo bridge para permitir comunicação entre os containers.

## Regras de Segurança:
- Firewall (ufw):
   - Bloqueio de todas as conexões de entrada, exceto:
      - Porta 22 (SSH) para gerenciamento.
      - Porta 80 (HTTP) e 443 (HTTPS) para o proxy e aplicação.
   - Permissão para todas as conexões de saída.
- Fail2Ban (Hardening):
   - Proteção contra tentativas de login inválidas ou ataques de força bruta em serviços como SSH.
   - Ativado e configurado para monitorar tentativas de acesso maliciosas.
- Tarefas Cron (Hardening):
   - Atualização automatizada do sistema operacional.
   - Backup semanal de arquivos na pasta /mnt/fileserver para /mnt/hdbackup.

## Fluxo de Comunicação e Uso de Containers
- O proxy reverso (proxy-container):
   - Recebe requisições HTTP na porta 80.
   - Encaminha as requisições para o serviço da aplicação (app-container) na porta 3000.
- A aplicação (app-container):
   - Serve conteúdo estático (HTML, CSS, JS, imagens) diretamente.
   - Comunica-se exclusivamente com o proxy através da rede app-network.

## Testes dos serviços
### Testando Docker e os Containers
- Versão e funcionamento
```
docker --version
systemctl status docker
docker ps
```
- Logs dos containers
```
docker logs proxy-container
docker logs app-container
```
### Testando Firewall (ufw)
- Status e regras ativas:
```
sudo ufw status verbose
```
- Portas:
```
curl http://localhost:80
ssh vagrant@192.168.1.100

curl http://localhost:8081
```
### Fail2Ban
- Status
```
sudo systemctl status fail2ban

```
### Tarefas Cron
- Status e listar agendamentos
```
sudo systemctl status cron
sudo crontab -l
```
### Uso do Nmap
- Varredura
```
sudo nmap -sT localhost
```
- Verificar portas (exemplo)
```
sudo nmap -p 80,3000,22 localhost
```
