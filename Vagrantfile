Vagrant.configure("2") do |config|
    config.vm.box = "geerlingguy/ubuntu2004"
  
    config.vm.network "private_network", type: "dhcp"
  
    config.vm.provider "virtualbox" do |vb|
      vb.memory = "1024" # Set the amount of RAM for the virtual machine
      vb.cpus = 2 # Set the number of CPUs for the virtual machine
    end
  
    config.vm.provision "shell", inline: <<-SHELL
      # Add any necessary provisioning shell commands here
    SHELL
  end
  