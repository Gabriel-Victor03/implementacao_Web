Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.network "public_network", ip: "192.168.1.100"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "Servidor"
    vb.memory = "1024" 
    vb.cpus = 1 
  end

  # config.vm.network "forwarded_port", guest: 80, host: 8080
  # config.vm.network "forwarded_port", guest: 443, host: 8443

  config.vm.provision "shell", path: "provision.sh"
end
