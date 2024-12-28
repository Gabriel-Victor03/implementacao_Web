Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.network "public_network"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "Servidor"
    vb.memory = "1024" 
    vb.cpus = 1 
  end
  config.vm.provision "shell", path: "provision.sh"
end
