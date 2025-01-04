#!/bin/bash

# Atualiza o sistema operacional
sudo apt-get update
# apt-get upgrade -y

#Instala o front-end rconfig para ajudar a controlar os serviços iniciados
sudo apt-get install rcconf

#Instala o Nmap para scannear as portas
sudo apt-get install nmap

# Instala pacotes necessários
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Adiciona o repositório do Docker
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

# Atualiza novamente os pacotes para incluir o repositório do Docker
sudo apt-get update

# Instala o Docker e o Docker Compose
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin


# Adiciona o usuário 'vagrant' ao grupo docker (para evitar uso de 'sudo' com Docker)
sudo usermod -aG docker vagrant

# Habilita o Docker para iniciar automaticamente ao boot
sudo systemctl enable docker


# Confirma instalação do Docker e Docker Compose
sudo docker --version
sudo docker compose version

# Copia arquivos do projeto para a máquina virtual
sudo cp -R /vagrant/proxy /home/vagrant/
sudo cp -R /vagrant/app /home/vagrant/
sudo cp /vagrant/docker-compose.yml /home/vagrant/



# Configura o firewall UFW para negar entrada
sudo ufw default deny incoming

#Configura o UFW para permitir saída
sudo ufw default allow outgoing

#Permite conexão HTTP
sudo ufw allow 80

#Permite conexão SSH
sudo ufw allow 22

#Permite conexão HTTPS
sudo ufw allow 443

#Deixa o ufw habilitado automaticamente
sudo ufw --force enable

#Instala o serviço cron
sudo apt install -y cron

#Habilita o serviço
sudo systemctl enable cron
sudo systemctl start cron

#Adiciona no arquivo crontab a tarefa de toda segunda-feira as 10:30 acontecer atualização do sistema
echo "30 10 * * 1 vagrant apt-get update && apt-get upgrade -y" | sudo tee -a /etc/crontab

# Cria os diretórios necessários
sudo mkdir -p /mnt/hdbackup /mnt/fileserver
# Garante permissões para o usuário 'vagrant' nos diretórios
sudo chown -R vagrant:vagrant /mnt/hdbackup /mnt/fileserver

#Cria um sistema de arquivos para backup, sendo feito periodico a limpeza da pasta para entrar o novo backup
echo "0 18 * * 5 vagrant rm -r /mnt/hdbackup/backup.tar.gz" | sudo tee -a /etc/crontab
echo "0 19 * * 5 vagrant tar cvfz /mnt/hdbackup/backup.tar.gz /mnt/fileserver/" | sudo tee -a /etc/crontab

# Vai para o diretório do projeto e executa o Docker Compose
sudo cd /home/vagrant
sudo docker compose up -d

echo "Provisionamento concluído com sucesso!"
