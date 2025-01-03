#!/bin/bash

# Atualiza o sistema operacional
apt-get update
# apt-get upgrade -y

# Instala pacotes necessários
apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Adiciona o repositório do Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

# Atualiza novamente os pacotes para incluir o repositório do Docker
apt-get update

# Instala o Docker e o Docker Compose
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Adiciona o usuário 'vagrant' ao grupo docker (para evitar uso de 'sudo' com Docker)
usermod -aG docker vagrant

# Habilita o Docker para iniciar automaticamente ao boot
systemctl enable docker

# Confirma instalação do Docker e Docker Compose
docker --version
docker compose version

# Copia arquivos do projeto para a máquina virtual
cp -r /vagrant/proxy /home/vagrant/proxy
cp -r /vagrant/app /home/vagrant/app
cp /vagrant/docker-compose.yml /home/vagrant/docker-compose.yml

# Vai para o diretório do projeto e executa o Docker Compose
cd /home/vagrant
docker-compose up -d

echo "Provisionamento concluído com sucesso!"
