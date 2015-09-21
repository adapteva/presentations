
# How to install node on Ubuntu?
```sh
curl -sL https://deb.nodesource.com/setup_0.10 | sudo -E bash -
sudo apt-get install -y nodejs
```

# How to Install pub-server?
```sh
sudo npm install -g pub-server
```

# How to update to latest pub-server?  
```sh
sudo npm update -g pub-server
```

# How to run server?
```sh
cd presentations
pub
```

# How to view generated html? 
http://localhost:3001

# How to print to PDF?
View the presentation in index mode and print to PDF in chrome browser.
(Other browsers don't work as well) 

# How to debug something? (never needed)
```sh
bash
DEBUG=pub:* pub
```

