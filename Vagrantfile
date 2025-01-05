Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.network "public_network", ip: "192.168.1.100"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "Servidor"
    vb.memory = "1024" 
    vb.cpus = 1 
  end

  config.vm.network "forwarded_port", guest: 3000, host: 3000  # app
  config.vm.network "forwarded_port", guest: 80, host: 8080    # proxy
  
  config.vm.synced_folder "./proxy", "/home/vagrant/proxy"
  config.vm.synced_folder "./app", "/home/vagrant/app"
  

  config.vm.provision "shell", path: "provision.sh"
end
